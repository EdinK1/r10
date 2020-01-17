import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Conduct = ({title, description}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text>
          {open ? '-' : '+'} {title}
        </Text>
      </TouchableOpacity>
      {open ? <Text>{description}</Text> : null}
    </>
  );
};

export default Conduct;
