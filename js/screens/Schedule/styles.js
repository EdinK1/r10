import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  startTime: {
    backgroundColor: '#e6e6e6',
    paddingVertical: 7,
    paddingLeft: 8,
    fontSize: 13,
    fontWeight: '600',
  },
  sessionDetails: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 8,
    paddingVertical: 10,
  },
  sessionLocation: {
    color: '#999',
    paddingLeft: 8,
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  favoriteContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  favoriteBtn: {
    paddingRight: 10,
  },
});

export default styles;
