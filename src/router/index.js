import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  FotoSelfie,
  Login,
  MainApp,
  Pengajuan,
  Register,
  Report,
  Signal,
  Simulasi,
  Splash,
  UpdateProfile,
  UploadPhoto,
  UserProfile,
} from '../page';
import UploadKtp from '../page/UploadKtp';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pengajuan"
        component={Pengajuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Simulasi"
        component={Simulasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadKtp"
        component={UploadKtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signal"
        component={Signal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FotoSelfie"
        component={FotoSelfie}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
