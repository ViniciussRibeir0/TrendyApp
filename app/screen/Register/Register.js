import react from "react";
import { View, Text, Container, Title, SubTitle, Input, RegisterSubmit, TextSubmit }  from './styles'
import { registerRootComponent } from "expo";
import Icon from 'react-native-vector-icons/FontAwesome';


function Register() {

    return(
    <Container>
        <Title>Register</Title>
        <SubTitle>Provide your Email and choose a Password of at least 8 characters</SubTitle>
        <Input 
        placeholderTextColor="#484848"
        placeholder="Username"
        ></Input>
        <Input placeholderTextColor="#484848"
                placeholder="Email"></Input>
        <Input placeholderTextColor="#484848"
                placeholder="Phone Number"></Input>    
        <Input placeholderTextColor="#484848"
                placeholder="Password" ></Input> 
        <Input placeholderTextColor="#484848"
                placeholder="Confirm Password" ></Input>      
        <RegisterSubmit><TextSubmit>Register Now!</TextSubmit></RegisterSubmit>       
    </Container>
    )
}

export default Register;

