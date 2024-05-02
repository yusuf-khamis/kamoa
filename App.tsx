import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UploadPage from './pages/Upload';
import HomePage from './pages/Home';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [step, setStep] = useState(1);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Upload">
        <Stack.Screen name="Upload" component={UploadPage} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomePage} options={{title: 'Kamoa'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
