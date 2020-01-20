import React from 'react';
import {Modal as NativeModal, Text, TouchableOpacity} from 'react-native';
import Section from './Section';
import Heading from './Heading';

const Modal = ({children, open = false, onClose}) => (
  <NativeModal animationType="slide" transparent={false} visible={open}>
    <Section>
      <TouchableOpacity onPress={onClose}>
        <Text>x</Text>
      </TouchableOpacity>
      <Heading>About the Speaker</Heading>
      {children}
    </Section>
  </NativeModal>
);

export default Modal;
