import React from 'react';
import {Modal as NativeModal, Text, TouchableOpacity, View} from 'react-native';
import Section from './Section';
import Heading from './Heading';
import globalStyles from '../assets/styles/styles';
import {ScrollView} from 'react-native-gesture-handler';

const Modal = ({children, open = false, onClose}) => (
  <NativeModal animationType="slide" transparent={false} visible={open}>
    <Section style={globalStyles.modalContainer}>
      <TouchableOpacity style={globalStyles.modalHeader} onPress={onClose}>
        <Text style={globalStyles.modalCloseBtn}>x</Text>
        <Heading style={globalStyles.modalAboutSpeaker}>
          About the Speaker
        </Heading>
      </TouchableOpacity>
      <ScrollView>
        <Section style={globalStyles.modal}>{children}</Section>
      </ScrollView>
    </Section>
  </NativeModal>
);

export default Modal;
