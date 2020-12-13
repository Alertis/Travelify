import React from 'react';
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

export default function App() {

  return (
    <PaperProvider theme={theme}>
        <Router>
          <Stack hideNavBar key="root">
          <Scene key="travelDetail" component={TravelDetail} />

          <Scene tabs={true} >
              <Scene initial title="Anasayfa" key="main" component={Main} hideNavBar icon={TabIcon} name="home-outline" />
              <Scene initial title="Seyehat Noktaları" key="main2" component={ListTravel} hideNavBar icon={TabIcon} name="home-outline" />
              <Scene initial title="Ayarlar" key="main3" component={TravelDetail} hideNavBar icon={TabIcon} name="settings-outline" />

            </Scene>
            <Scene key="infoLogin" component={InfoLogin} />
            <Scene key="login" component={Login} />
            <Scene key="restorePass" component={RestorePass} />
            <Scene key="register" component={Register} />
          </Stack>
        </Router>
    </PaperProvider>
  );
}
/**
 *  
 */