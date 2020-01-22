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

  const startTime = time =>
    new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

  return loading ? (
    <Paragraph>loading...</Paragraph>
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
        <Text style={styles.startTime}>{startTime(session.startTime)}</Text>
        <Paragraph>{session.description}</Paragraph>
        <Text style={styles.presentedBy}>Presented by:</Text>
      </Section>
      <TouchableOpacity style={styles.speaker} onPress={toggleModal}>
        <Image
          style={styles.speakerImg}
          source={{uri: session.speaker.image}}
        />
        <Text style={styles.speakerName}>{session.speaker.name}</Text>
      </TouchableOpacity>
      <Section style={styles.favoriteBtnContainer}>
        <FavoriteBtn style={styles.favoriteBtn} id={session.id} />
      </Section>
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
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={() => Linking.openURL(session.speaker.url)}>
          <Text style={globalStyles.favoriteBtnText}>
            Read More on Wikipedia
          </Text>
        </TouchableOpacity>
      </Modal>
    </Section>
  ) : null;
};

export default Session;
