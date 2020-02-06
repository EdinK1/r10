import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Section from '../../components/Section';
import {Text, Image, TouchableOpacity, Linking} from 'react-native';
import Paragraph from '../../components/Paragraph';
import Heading from '../../components/Heading';
import FavoriteIcon from '../../components/FavoriteIcon';
import Modal from '../../components/Modal';
import FavoriteBtn from '../../components/FavoriteBtn';
import styles from './styles';
import globalStyles from '../../assets/styles/styles';
import {timeFormatter} from '../../helpers/';
import Spinner from '../../components/Spinner';
import LinearGradient from 'react-native-linear-gradient';

const getSelectedSessionById = id => {
  const {data, loading, error} = useQuery(
    gql`
      query SelectedSession($id: ID!) {
        Session(id: $id) {
          id
          title
          description
          location
          speaker {
            id
            name
            bio
            url
            image
          }
          startTime
        }
      }
    `,
    {variables: {id}},
  );
  return {session: data ? data.Session : null, loading, error};
};

const Session = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  const {error, loading, session} = getSelectedSessionById(
    navigation.getParam('id'),
  );

  return loading ? (
    <Spinner />
  ) : error ? (
    <Paragraph>Something went wrong</Paragraph>
  ) : session ? (
    <Section style={styles.wrapper}>
      <Section style={styles.header}>
        <Text style={styles.sessionLocation}>{session.location}</Text>
        <FavoriteIcon id={session.id} />
      </Section>
      <Section>
        <Heading>{session.title}</Heading>
        <Text style={styles.startTime}>{timeFormatter(session.startTime)}</Text>
        <Paragraph>{session.description}</Paragraph>
      </Section>
      {session.speaker && (
        <>
          <Text style={styles.presentedBy}>Presented by:</Text>
          <TouchableOpacity style={styles.speaker} onPress={toggleModal}>
            <Image
              style={styles.speakerImg}
              source={{uri: session.speaker.image}}
            />
            <Text style={styles.speakerName}>{session.speaker.name}</Text>
          </TouchableOpacity>
        </>
      )}
      <Section style={styles.favoriteBtnContainer}>
        <FavoriteBtn id={session.id} />
      </Section>
      {session.speaker && (
        <Modal
          modalStyle={globalStyles.modal}
          open={openModal}
          onClose={toggleModal}>
          <Image
            style={styles.modalSpeakerImg}
            source={{uri: session.speaker.image}}
          />
          <Heading>{session.speaker.name}</Heading>
          <Paragraph>{session.speaker.bio}</Paragraph>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={globalStyles.favoriteBtn}>
            <TouchableOpacity
              style={styles.favoriteBtn}
              onPress={() => Linking.openURL(session.speaker.url)}>
              <Text style={globalStyles.favoriteBtnText}>
                Read More on Wikipedia
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </Modal>
      )}
    </Section>
  ) : null;
};

export default Session;
