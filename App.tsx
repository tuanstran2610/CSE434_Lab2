import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BatteryScreen from './src/screen/BatteryScreen';
import BrightnessScreen from './src/screen/BrightnessScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Battery" component={BatteryScreen} />
      <Stack.Screen name="Brightness" component={BrightnessScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
