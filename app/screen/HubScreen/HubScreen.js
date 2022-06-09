import React from 'react'
import { View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground}  from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import Homepage from '../Homepage/Homepage';
import TrendScreen from '../TrendScreen/TrendScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import NotificationScreen from '../NotificationScreen/NotificationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

function HubScreen( navigation ){
    return(
        <Container style={{flex:1,backgroundColor:'#18171F'}}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarStyle: {
                            height: 70,
                            margin: -20,
                            padding: 0,
                            position: 'absolute',
                            backgroundColor: '#0F0F13',
                            color: '#0F0F13',
                        },
                        tabBarInactiveTintColor: '#fff',
                        tabBarActiveTintColor: 'purple'
                    }}
                >  
                    <Tab.Screen name="ForgotPassword" component={Homepage}
                     options={{
                         tabBarIcon: ({color, focused}) => (<Ionicon name="home-outline" color={color} size={30}/>)
                     }}
                    />

                    <Tab.Screen name="TrendScreen" component={TrendScreen}
                     options={{
                         tabBarIcon: ({color, focused}) => (<Feather name="trending-up" color={color} size={30}/>)
                     }}
                    />

                    <Tab.Screen name="NotificationScreen" component={NotificationScreen}
                     options={{
                         tabBarIcon: ({color, focused}) => (<Feather name="bell" color={color} size={30}/>),
                         tabBarBadge: 0,
                     }}
                    />

                    <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                     options={{
                         tabBarIcon: ({color, focused}) => (<Feather name="user" color={color} size={30}/>)
                     }}
                    />

                </Tab.Navigator>
        </Container>
    )
}

export default HubScreen;