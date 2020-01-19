import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Section from '../../components/Section';
import {Text} from 'react-native';

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
  return {session: data ? data.Session : loading, error};
};

const Session = ({navigation}) => {
  const {error, loading, session} = getSelectedSessionById(
    navigation.getParam('id'),
  );
  // console.log();
  return (
    <Section>
      <Text>
        {session.title} | {session.description}
      </Text>
    </Section>
  );
};

export default Session;
