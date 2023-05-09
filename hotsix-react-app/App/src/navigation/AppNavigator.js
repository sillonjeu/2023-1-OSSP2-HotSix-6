import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import GroupScreen from '../screens/GroupScreen';
import TimetableScreen from '../screens/TimetableScreen';
import EmailVerificationScreen from '../screens/VerificationScreen';
import CreateNewgroupPage from '../screens/CreateNewgroupScreen';
import AgreementScreen from '../screens/AgreementScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
        <Stack.Screen name="Timetable" component={TimetableScreen} />
        <Stack.Screen name="Verification" component={EmailVerificationScreen} />
        <Stack.Screen name="Makegroup" component={CreateNewgroupPage} />
        <Stack.Screen name="Agreement" component={AgreementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;