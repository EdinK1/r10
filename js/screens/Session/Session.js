import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Section from '../../components/Section';
import {Text, Image, TouchableOpacity} from 'react-native';
import Paragraph from '../../components/Paragraph';
import Heading from '../../components/Heading';
import globalStyles from '../../assets/styles/styles';
import FavoriteBtn from '../../components/FavoriteBtn';

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
  const {error, loading, session} = getSelectedSessionById(
    navigation.getParam('id'),
  );

  return loading ? (
    <Paragraph>loading...</Paragraph>
  ) : error ? (
    <Paragraph>Something went wrong</Paragraph>
  ) : session ? (
    <Section>
      <Text>{session.location}</Text>
      <Heading>{session.title}</Heading>
      <Text>{session.startTime}</Text>
      <Paragraph>{session.description}</Paragraph>
      <Text>Presented by:</Text>

      <TouchableOpacity>
        <Text>{session.speaker.name}</Text>
        <Image
          style={{width: 65, height: 65, borderRadius: 65 / 2}}
          source={{uri: session.speaker.image}}
        />
      </TouchableOpacity>
      <FavoriteBtn color="#9963ea" label="Add to Faves" />
    </Section>
  ) : null;
};

export default Session;