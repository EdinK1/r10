import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../screens/About/styles';
import Paragraph from './Paragraph';
import Animated from 'react-native-reanimated';
import CollapsableText from './CollapsableText';

const Conduct = ({title, description, ...props}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={styles.conductTitle} {...props}>
          {open ? '-' : '+'} {title}
        </Text>
      </TouchableOpacity>
      <CollapsableText>
        {open ? <Paragraph>{description}</Paragraph> : null}
      </CollapsableText>
    </>
  );
};

export default Conduct;
