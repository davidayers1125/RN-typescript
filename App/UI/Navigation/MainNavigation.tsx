import React, {useEffect} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { ScreenNames } from '../Utils/Enums';
import Container from '../Sections/Home/Screens/Container';
import Profile from '../Sections/Profile/Screen/Profile';
const MainStack = createStackNavigator();
const AppStack = () => {
    return(
        <MainStack.Navigator
        initialRouteName = {ScreenNames.Container}
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
          }}
        >
            <MainStack.Screen
            name = {ScreenNames.Container}
            component = {Container}
            />
             <MainStack.Screen
            name = {ScreenNames.Profile}
            component = {Profile}
            />
        </MainStack.Navigator>
    )
}
export default AppStack