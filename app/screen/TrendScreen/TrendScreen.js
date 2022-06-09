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

function TrendScreen ({ navigation }){

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

            <View
                style={{
                    flexDirection: 'row',
                    borderColor: '#373543',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    marginTop: 10,
                    backgroundColor: '#373543',
                    alignItems:'center'
                }}
                >   
                    <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    <Input placeholder="Search" placeholderTextColor="#fff"/>
                </View>

                <View
                style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                >   
                    <TouchableOpacity 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    >
                    <Text style={{color:'white', fontFamily: 'Poppins_500Medium', fontSize:20, marginRight:5}}>Trends</Text>
                    <Feather name="chevron-down" color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    )
}

export default TrendScreen;