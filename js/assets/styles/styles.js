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
    paddingVertical: 10,
  },
});

export default globalStyles;
