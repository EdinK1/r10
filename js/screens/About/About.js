import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Conduct from '../../components/Conduct';

const AlL_CONDUCTS = gql`
  {
    allConducts {
      id
      title
      description
      order
    }
  }
`;

const About = () => {
  const {loading, error, data} = useQuery(AlL_CONDUCTS);
  return loading ? (
    <div>loading...</div>
  ) : error ? (
    console.error(error)
  ) : (
    <View style={styles.container}>
      <Text>About</Text>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/r10_logo.png')} />
      </View>
      <Text style={styles.paragraph}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <View>
        <Text style={styles.title}>Date & Venue</Text>
        <Text style={styles.paragraph}>
          The R10 conference will take place on Tuesday, June 27, 2020 in
          Vancouver, BC.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Code of Conduct</Text>
        {data.allConducts.map(data => (
          <Conduct
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </View>
      <View>
        <Text>©RED Academy 2020</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  paragraph: {
    fontSize: 18,
    paddingVertical: 20,
  },
  logoContainer: {
    padding: 24,
    width: '90%',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e6e6e6',
  },
});

export default About;
