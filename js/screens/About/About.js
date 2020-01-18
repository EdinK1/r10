import React from 'react';
import {Text, Image} from 'react-native';
import globalStyles from '../../assets/styles/styles';
import styles from './styles';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Conduct from '../../components/Conduct';
import Paragraph from '../../components/Paragraph';
import Section from '../../components/Section';
import Heading from '../../components/Heading';
import {ScrollView} from 'react-native-gesture-handler';

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
    <ScrollView>
      <Section style={globalStyles.container}>
        <Section style={styles.logoContainer}>
          <Image source={require('../../assets/r10_logo.png')} />
        </Section>
        <Section style={globalStyles.content}>
          <Paragraph>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Paragraph>
          <Heading>Date & Venue</Heading>
          <Paragraph>
            The R10 conference will take place on Tuesday, June 27, 2020 in
            Vancouver, BC.
          </Paragraph>
        </Section>
        <Section style={globalStyles.content}>
          <Heading>Code of Conduct</Heading>
          <ScrollView>
            {data.allConducts.map(data => (
              <Conduct
                key={data.id}
                title={data.title}
                description={data.description}
              />
            ))}
          </ScrollView>
        </Section>
        <Section style={styles.footer}>
          <Paragraph>© RED Academy 2020</Paragraph>
        </Section>
      </Section>
    </ScrollView>
  );
};

export default About;
