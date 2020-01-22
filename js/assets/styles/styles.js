import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    width: '90%',
  },
  title: {
    fontSize: 26,
    paddingVertical: 10,
    fontWeight: '600',
  },
  paragraph: {
    fontWeight: '300',
    color: '#000',
    fontSize: 20,
    lineHeight: 30,
    paddingVertical: 10,
  },
  favoriteBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    letterSpacing: 2,
  },
  modalContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  modal: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 40,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  modalAboutSpeaker: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 1.1,
  },
  modalCloseBtn: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 85,
  },
});

export default globalStyles;
