import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from './screens/Home';
import AddToDoScreen from './screens/AddToDo'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="AddToDo" component={AddToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
