import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  sessionLocation: {
    color: '#999',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  startTime: {
    color: '#cf392a',
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  presentedBy: {
    paddingVertical: 16,
    fontSize: 18,
    color: '#999',
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  speakerName: {
    paddingLeft: 10,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  speakerImg: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
  },
  favoriteBtnContainer: {
    alignItems: 'center',
  },
  modalSpeakerImg: {
    height: 135,
    width: 135,
    borderRadius: 135 / 2,
    marginBottom: 10,
  },
});

export default styles;
