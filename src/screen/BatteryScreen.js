import React, { useEffect, useState } from 'react';
import { View, Text, NativeModules, StyleSheet } from 'react-native';

const { BatteryModule } = NativeModules;

const BatteryScreen = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    BatteryModule.getBatteryLevel()
      .then((level) => setBatteryLevel(level))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Battery Level: {batteryLevel !== null ? `${batteryLevel}%` : 'Loading...'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BatteryScreen;
