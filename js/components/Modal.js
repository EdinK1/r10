import React from 'react';
import {Modal as NativeModal, Text, TouchableOpacity} from 'react-native';
import Section from './Section';

const Modal = ({children}) => (
  <NativeModal animation="slide" transparent={false} visible={true}>
    <TouchableOpacity>
      <Text>+</Text>
    </TouchableOpacity>
    <Section>
      <Text>hello</Text>
      {children}
    </Section>
  </NativeModal>
);

export default Modal;
