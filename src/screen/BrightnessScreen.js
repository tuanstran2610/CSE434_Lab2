import React, { useState } from 'react';
import { View, Slider, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';

const { BrightnessModule } = NativeModules;

const BrightnessScreen = () => {
  const [brightness, setBrightness] = useState(1);

  const adjustBrightness = (value) => {
    setBrightness(value);
    BrightnessModule.setBrightness(value);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={brightness}
        onValueChange={adjustBrightness}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 300,
    height: 40,
  },
});

export default BrightnessScreen;
