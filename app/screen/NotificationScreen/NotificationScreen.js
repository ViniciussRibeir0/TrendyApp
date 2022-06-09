import { View, 
    Text, 
    Container, 
    Title, 
    SubTitle, 
    Input, 
    RegisterSubmit, 
    TextSubmit, 
    EmailKey,
    PhoneKey,
    KeyText,
    ButtonSubmit,
    Hamburger,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    SeeAll,
    Image,
    StyleSheet,
    TouchableOpacity
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import { Ionicons } from '@expo/vector-icons'

function NotificationScreen ({ navigation }){

    return(
        <Container style={{flex:1,backgroundColor:'#18171F'}}>
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center'}}>
                <Hamburger>
                    <ImageBackground
                    source={require('../../assets/logo.png')}
                    style={{width:55, height:45}}
                    imageStyle={{borderRadius: 10}}
                    />
                </Hamburger>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <ImageBackground 
                        source={require('../../assets/Lindo2.png')}
                        style={{width:35, height:35}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    )
}

export default NotificationScreen;