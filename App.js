import React from 'react';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { Provider as PaperProvider, DefaultTheme, IconButton, Text } from 'react-native-paper';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Login from './src/scenes/user/Login'
import InfoLogin from './src/scenes/user/Info'
import ListTravel from './src/scenes/travels/List'
import Register from './src/scenes/user/Register'
import RestorePass from './src/scenes/user/RestorePass'
import TravelDetail from './src/scenes/travels/Detail'
import Main from './src/scenes/main/Main'

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

export default function App() {

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Router>
          <Stack hideNavBar key="root">
            <Scene key="infoLogin" component={InfoLogin} />
            <Scene key="login" component={Login} />
            <Scene key="register" component={Register} />
            <Scene key="restorePass" component={RestorePass} />
            <Scene tabs={true} >
              <Scene initial title="Anasayfa" key="main" component={Main} hideNavBar icon={TabIcon} name="home-outline" />
              <Scene initial title="Seyehat Noktaları" key="main2" component={ListTravel} hideNavBar icon={TabIcon} name="home-outline" />
              <Scene initial title="Ayarlar" key="main3" component={TravelDetail} hideNavBar icon={TabIcon} name="settings-outline" />
            </Scene>
            <Scene key="travelDetail" component={TravelDetail} />

          </Stack>
        </Router>
      </PaperProvider>
    </Provider>
  );
}
/**
 *  
 */