import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/LoginRegister/Login';
import Register from '../Pages/LoginRegister/Register';
import RegisterVerification from '../Pages/LoginRegister/RegisterVerification';
import RegisterVerifSuccess from '../Pages/LoginRegister/RegisterVerifSuccess';
import RegisterPin from '../Pages/LoginRegister/RegisterPin';

const Stack = createStackNavigator();

export default function RouteNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            // screenOptions={{
            //     headerShown: false
            // }}
            >
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />

                <Stack.Screen options={{
                    headerShown: false,
                    gestureEnabled: false
                }} name="RegisterVerif" component={RegisterVerification} />
                <Stack.Screen options={{
                    headerShown: false,
                    gestureEnabled: false
                }} name="RegisterVerifSuccess" component={RegisterVerifSuccess} />
                <Stack.Screen name="RegisterPin" component={RegisterPin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}