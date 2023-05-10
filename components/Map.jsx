import React from "react";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet, View } from "react-native";

import MapView from "react-native-maps";

const Map = ({ start }) => {
  const origin = `${start.town}, ${start.adress}`;
  const destination = `${start.town2}, ${start.adress2}`;

  const GOOGLE_MAPS_APIKEY = "AIzaSyBXxfPDGrs6NKEjMBt6YTzrgBCXAC7-AyY";
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 250,
  },
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
  },
});
