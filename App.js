import React from 'react';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { Provider as PaperProvider, DefaultTheme, IconButton, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/scenes/user/Login'
import InfoLogin from './src/scenes/user/Info'
import ListTravel from './src/scenes/travels/List'
import Register from './src/scenes/user/Register'
import RestorePass from './src/scenes/user/RestorePass'
import TravelDetail from './src/scenes/travels/Detail'
import Main from './src/scenes/main/Main'
import Settings from './src/scenes/settings/Settings'


import Icon from 'react-native-ionicons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59',
  },
};

function TabIcon(props){
  return (
    <IconButton  size={24} style={{color: props.focused ? '#8B327C' :'#3F8B99'}} icon={props.name}/>
  );
}

const store = createStore( rootReducer, applyMiddleware(promise,thunk) )
const tabNavigation = () => {
  return( 
    <Tab.Navigator    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'main') {
          return (
            <Icon name="apps" color={color} />
          );
        } else if (route.name === 'setting') {
          return (
            <Icon name="construct" color={color} />
          );
        } else if (route.name === 'locations')
        return (
          <Icon name="compass" color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#f13a59',
      inactiveTintColor: '#600EE6',
    }}>
      <Tab.Screen name="main" component={Main} options={{headerShown: false}}  />
      <Tab.Screen name="locations" component={ListTravel} options={{headerShown: false}} />
      <Tab.Screen name="setting" component={Settings} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

export default function App() {
  let options =  {
    headerShown: false,
    cardStyle: { backgroundColor: 'transparent'}
  }
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="infoLogin" component={InfoLogin } options={options} />
            <Stack.Screen name="login" component={Login} options={options} />
            <Stack.Screen name="register" component={Register} options={options}/>
            <Stack.Screen name="restorePass" component={RestorePass} options={options} />
            <Stack.Screen name="travelDetail" component={TravelDetail} options={options} />
            <Stack.Screen name="TabNavigation" component={tabNavigation} options={options} independent={true} />

            
          </Stack.Navigator>
         
        </NavigationContainer>       
      </PaperProvider>
    </Provider>
  );
}
/**
 *  
 */