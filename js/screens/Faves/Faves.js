import React from 'react';
import {TouchableOpacity, Text, SectionList, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import styles from '../Schedule/styles';
import Section from '../../components/Section';
import FavoriteIcon from '../../components/FavoriteIcon';
import useFavorites from '../../hooks/useFavorites';
import {timeFormatter, sessionGrouper} from '../../helpers';
import Spinner from '../../components/Spinner';

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

  return loading ? (
    <Spinner />
  ) : error ? (
    <Text>something went wrong.</Text>
  ) : (
    <SectionList
      sections={data.allSessions
        .filter(({id}) => favorites.includes(id))
        .reduce(sessionGrouper, [])}
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
