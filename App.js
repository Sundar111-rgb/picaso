

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployeeDetails from './Screens/EmployeeDetail'
import ShowEmployeeDetails from './Screens/ShowEmployeeDetail'

import StudentDetails from './Screens/StudentDetails'
import ShowStudentDetails from './Screens/ShowStudentDetails'

import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
// import AppNavigator from './Screens/Navigation/Navigation';
import { store, persistor } from './Store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00b2f4' }}>
          <StatusBar hidden={true} backgroundColor="#00b2f4" />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <NavigationContainer>
              {/* Rest of your app code */}
              <Stack.Navigator>
                {/* <Stack.Screen
                  name='EmployeeDetails'
                  component={EmployeeDetails}
                  options={{ title: null , headerShown: false}}
                />
                <Stack.Screen name='ShowEmployeeDetails' 
                  component={ShowEmployeeDetails} 
                  options={{ title: 'Details Screen', headerShown: false }} 
                /> */}
                 <Stack.Screen
                  name='StudentDetails'
                  component={StudentDetails}
                  options={{ title: null , headerShown: false}}
                />
                <Stack.Screen
                  name='ShowStudentDetails' 
                  component={ShowStudentDetails} 
                  options={{ title: 'Details Screen', headerShown: false }} 
                /> 

              </Stack.Navigator>
            </NavigationContainer>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
