import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Login from './src/scenes/user/Login'
import InfoLogin from './src/scenes/user/Info'
import Register from './src/scenes/user/Register'
import RestorePass from './src/scenes/user/RestorePass'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
        <Router>
          <Stack hideNavBar key="root">
            <Scene key="infoLogin" component={InfoLogin} />
            <Scene key="login" component={Login} />
            <Scene key="restorePass" component={RestorePass} />
            <Scene key="register" component={Register} />
          </Stack>
        </Router>
    </PaperProvider>
   
  );
}
