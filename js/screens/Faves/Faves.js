import React from 'react';
import {TouchableOpacity, Text, SectionList, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import styles from '../Schedule/styles';
import Section from '../../components/Section';
import FavoriteBtn from '../../components/FavoriteBtn';
import useFavorites from '../../hooks/useFavorites';

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
  const [favorites] = useFavorites();
  const {loading, error, data} = useQuery(ALL_SESSIONS);
  const startTime = time =>
    new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

  const reduceSessionsToHeaders = (headers, session) => {
    const sectionIndex = headers.findIndex(
      ({title}) => title === session.startTime,
    );

    if (sectionIndex === -1)
      return [
        ...headers,
        {
          title: session.startTime,
          data: [session],
        },
      ];

    headers[sectionIndex].data.push(session);

    return headers;
  };

  return loading ? (
    <Text>loading...</Text>
  ) : error ? (
    <Text>something went wrong.</Text>
  ) : (
    <Section>
      <SectionList
        sections={data.allSessions
          .filter(({id}) => favorites.includes(id))
          .reduce(reduceSessionsToHeaders, [])}
        keyExtractor={({id}) => id}
        renderItem={({item: {id, title, location}}, i) => (
          <View style={styles.sessionDetails}>
            <TouchableOpacity onPress={() => navigation.push('Session', {id})}>
              <Text style={styles.sessionTitle}>{title}</Text>
            </TouchableOpacity>
            <View style={styles.favoriteContainer}>
              <Text style={styles.sessionLocation}>{location}</Text>
              <FavoriteBtn id={id} style={styles.favoriteBtn} />
            </View>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.startTime}>{startTime(title)}</Text>
        )}
      />
    </Section>
  );
};

export default Schedule;
