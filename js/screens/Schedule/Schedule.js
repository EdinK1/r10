import React, {useState} from 'react';
import {TouchableOpacity, Text, SectionList, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import styles from './styles';
import Section from '../../components/Section';
import FavoriteIcon from '../../components/FavoriteIcon';
import {timeFormatter, sessionGrouper} from '../../helpers/';

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

const Schedule = ({navigation}) => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);

  return loading ? (
    <Text>loading...</Text>
  ) : error ? (
    <Text>something went wrong.</Text>
  ) : (
    <SectionList
      sections={data.allSessions.reduce(sessionGrouper, [])}
      keyExtractor={({id}) => id}
      renderItem={({item: {id, title, location}}, i) => (
        <View style={styles.sessionDetails}>
          <TouchableOpacity onPress={() => navigation.push('Session', {id})}>
            <Text style={styles.sessionTitle}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.favoriteContainer}>
            <Text style={styles.sessionLocation}>{location}</Text>
            <FavoriteIcon id={id} style={styles.favoriteIcon} />
          </View>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.startTime}>{timeFormatter(title)}</Text>
      )}
    />
  );
};

export default Schedule;
