import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Rooms from './pages/Rooms';
import Messages from './pages/Messages';
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';

const renderIcon = () => (
  <Icon
    name="logout"
    size={30}
    color={colors.main}
    onPress={() => {
      auth().signOut();
    }}
  />
);
const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginPage" component={Login} />
    <Stack.Screen name="SignupPage" component={Signup} />
  </Stack.Navigator>
);
const UserStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RoomsPage"
      component={Rooms}
      options={{title: 'Odalar', headerTintColor: colors.main}}
    />
    <Stack.Screen
      name="MessagesPage"
      component={Messages}
      options={({route}) => ({
        title: route.params.title,
        headerTintColor: colors.main,
        headerRight: renderIcon,
      })}
    />
  </Stack.Navigator>
);
const Stack = createStackNavigator();

const App = () => {
  const [session, setSession] = useState();
  useEffect(() => {
    auth().onAuthStateChanged(user => setSession(!!user));
  }, []);
  return (
    <NavigationContainer>
      {!session ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default App;
