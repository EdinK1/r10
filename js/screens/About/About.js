import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Conduct from '../../components/Conduct';
import Paragraph from '../../components/Paragraph';
import Section from '../../components/Section';
import Heading from '../../components/Heading';

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
    <Paragraph>loading...</Paragraph>
  ) : error ? (
    <Paragraph>something went wrong.</Paragraph>
  ) : (
    <Section style={styles.container}>
      <Section style={styles.logoContainer}>
        <Image source={require('../../assets/r10_logo.png')} />
      </Section>
      <Paragraph style={styles.paragraph}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Paragraph>
      <Section>
        <Heading style={styles.title}>Date & Venue</Heading>
        <Paragraph style={styles.paragraph}>
          The R10 conference will take place on Tuesday, June 27, 2020 in
          Vancouver, BC.
        </Paragraph>
      </Section>
      <Section>
        <Text style={styles.title}>Code of Conduct</Text>
        {data.allConducts.map(data => (
          <Conduct
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </Section>
      <Section>
        <Paragraph>©RED Academy 2020</Paragraph>
      </Section>
    </Section>
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
