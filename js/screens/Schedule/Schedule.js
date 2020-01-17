import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, SectionList} from 'react-native';
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
  console.log(data);
  const startTime = time =>
    new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});
  return loading ? (
    <Text>loading...</Text>
  ) : error ? (
    <Text>something went wrong.</Text>
  ) : (
    data.allSessions.map(session => (
      <SafeAreaView key={session.id}>
        <Text>{startTime(session.startTime)}</Text>
        <TouchableOpacity>
          <Text>{session.title}</Text>
        </TouchableOpacity>
        <Text>{session.location}</Text>
      </SafeAreaView>
    ))
  );
};

export default Schedule;
