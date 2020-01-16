import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      title
      location
      startTime
    }
  }
`;

const Schedule = () => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);
  return loading ? (
    <Text>loading...</Text>
  ) : error ? (
    <Text>something went wrong.</Text>
  ) : (
    data.allSessions.map(session => (
      <View key={session.id}>
        <Text>{session.title}</Text>
        <Text>{session.location}</Text>
        <Text>{session.startTime}</Text>
      </View>
    ))
  );
};

export default Schedule;
