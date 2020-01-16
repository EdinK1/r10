import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native';

const Map = () => {
  const region = {
    latitude: 49.2633479,
    longitude: -123.1403165,
    latitudeDelta: 0.02,
    longitudeDelta: 0.055,
  };
  return (
    <MapView style={styles.mapStyle} initialRegion={region}>
      <Marker
        image={require('../../assets/map_pin.png')}
        coordinate={region}
        title="hey"
        description={'this is RED'}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
