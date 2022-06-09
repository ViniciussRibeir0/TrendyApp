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
import { Touchable } from 'react-native-web';

const Tab = createBottomTabNavigator();

function ProfileScreen( navigation ){
    return(
        <Container style={{flex:1,backgroundColor:'#18171F'}}>
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
                    marginVertical: 15,
                    justifyContent: 'space-between',
                }}>

                    <ImageBackground
                        source={require('../../assets/Lindo2.png')}
                        style={{width:90, height:90}}
                        imageStyle={{borderRadius: 50}}
                    />

                    <Title style={{marginTop: 15,}}>Vinicius</Title>
                    <Text>Ribeiro</Text>

                    
                </View>

                <View 
                style={{
                    marginVertical: 5,
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: 200
                }}>

                    <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: 'white',
                        marginBottom: 20
                    }}
                    >
                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#FEDDC9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="bookmark" color="black" size={30}/>
                    </TouchableOpacity>
                        <Title>Saved</Title>
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '40%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: 'white',
                        marginBottom: 20
                    }}
                    >
                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#CECBFF',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Ionicon name="pulse" color="black" size={30}/>
                    </TouchableOpacity>
                        <Title>Stats</Title>
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '43%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>
                    </View>

                    <View
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: 'white',
                        marginBottom: 20
                    }}
                    >
                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#DAFEC9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="info" color="black" size={30}/>
                    </TouchableOpacity>
                        <Title>Goals</Title>
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '40%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>
                    </View>

                    <View
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: 'white',
                        marginBottom: 20
                    }}
                    >
                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#C8F1FF',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="settings" color="black" size={30}/>
                    </TouchableOpacity>
                        <Title>Settings</Title>
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '35%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity
                    style={{
                        width: 110,
                        borderRadius: 5,
                        backgroundColor: '#1D1C23',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 5
                    }}
                    >
                        <Ionicon name="exit-outline" color="red" size={30} />
                        <Text style={{color: 'red', fontSize: 19}}>Sign out</Text>
                    </TouchableOpacity>
                </View>
        </Container>
    )
}

export default ProfileScreen;