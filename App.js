import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './app/screen/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './app/screen/Register/Register';
import ForgotPassword from './app/screen/ForgotPassword/ForgotPassword';
import NewPassword from './app/screen/NewPassword/NewPassword';
import PasswordUpdated from './app/screen/PasswordUpdated/PasswordUpdated';
import Homepage from './app/screen/Homepage/Homepage';
import ProfileScreen from "./app/screen/ProfileScreen/ProfileScreen";
import HubScreen from './app/screen/HubScreen/HubScreen';
import NotificationScreen from './app/screen/NotificationScreen/NotificationScreen';
import TrendScreen from './app/screen/TrendScreen/TrendScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
  useFonts 
} from '@expo-google-fonts/poppins';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator({
//   ProfileScreen
// })


export default function App() {

  let [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
});

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false}}>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='NewPassword' component={NewPassword} />
          <Stack.Screen name='PasswordUpdated' component={PasswordUpdated} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Homepage' component={Homepage} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
          <Stack.Screen name='HubScreen' component={HubScreen} />
          <Stack.Screen name='TrendScreen' component={TrendScreen} />
          <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


