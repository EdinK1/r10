import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../screens/About/styles';
import Paragraph from './Paragraph';

const Conduct = ({title, description, ...props}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={styles.conductTitle} {...props}>
          {open ? '-' : '+'} {title}
        </Text>
      </TouchableOpacity>
      {open ? <Paragraph>{description}</Paragraph> : null}
    </>
  );
};

export default Conduct;
