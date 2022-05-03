import React from 'react';
import { Text } from 'react-native';
import { KeyboardView, 
    Title, 
    StyleSheet, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit, 
    SubTitle, 
    Image, 
    View,
    Button,
    GoogleSubmit, 
    FacebookSubmit,
    RegisterSubmit,
    ForgotSubmit
    } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function  Signin({ navigation }) {
    return(
        
        <KeyboardView>
        <Container>

            <Title>Trendy</Title>
            <SubTitle>Login to your Account</SubTitle>

            <View
            style={{
                flexDirection: 'row',
                borderColor: '#484848',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: -5,
                marginLeft: -5,
                marginBottom: 20
            }}
            >
            
            <Input
                placeholderTextColor="#484848"
                placeholder="E-mail" 
            ></Input>
            <Icon name="user" size={30} color="white" style={{marginRight:15, marginTop: 15}} />
            </View>

            <View
            style={{
                flexDirection: 'row',
                borderColor: '#484848',
                borderWidth: 1,
                borderRadius: 8,
                
                marginBottom: 20
            }}
            >
            <Input
                placeholderTextColor="#484848"
                placeholder="Password" 
            ></Input>
            <Icon name="eye-slash" size={30} color="white" style={{marginRight:10, marginTop: 15, marginLeft: 7}} />
            </View>
            
            <ButtonSubmit onPress={() => navigation.navigate('Homepage')}>
                
                <TextSubmit>Login</TextSubmit>
            </ButtonSubmit>
            <Text style={{marginBottom: 20, color: 'white'}}>Or</Text>    
            
            <GoogleSubmit style={{flexDirection: 'row'}}>
                <Icon name="google" size={30} style={{marginRight:30}} />
                <TextSubmit style={{color: 'black'}}>Login with Google</TextSubmit>
            </GoogleSubmit>

            <FacebookSubmit style={{flexDirection: 'row'}}>
                <Icon name="facebook" color="white" size={30} style={{marginRight:30}} />
                <TextSubmit>Login with Facebook</TextSubmit>
            </FacebookSubmit>

            <ForgotSubmit onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 40,}}>Forgot Password?</Text>
            </ForgotSubmit>
            
            <RegisterSubmit onPress={() => navigation.navigate('Register')}>
                <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 10,}}>You are not registered? Register Now!</Text>
            </RegisterSubmit>

        </Container>
        </KeyboardView>    
        

    )
}

export default Signin;





