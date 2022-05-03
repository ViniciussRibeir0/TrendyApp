import { NavigationContainer } from "@react-navigation/native";
import react from "react";
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
 }  from './styles'


function ForgotPassword( {navigation} ){
    return(
        <Container>
            <Title>Forgot Password</Title>
            <SubTitle>Enter your email or phone number and use the correct key</SubTitle>
            <Input
            placeholderTextColor="#484848"
            placeholder="Enter your Email"
            ></Input>
            <EmailKey><KeyText>Send Key</KeyText></EmailKey>
            <Input
            placeholderTextColor="#484848"
            placeholder="Enter your Phone number"
            ></Input>
            <PhoneKey><KeyText>Send Key</KeyText></PhoneKey>
            <Input
            placeholderTextColor="#484848"
            placeholder="Enter key: 6 Digits"
            style={{marginTop: 50}}
            ></Input>

            <ButtonSubmit onPress={() => navigation.navigate('NewPassword')}>
                <TextSubmit>Next</TextSubmit>
            </ButtonSubmit>
        </Container>
    )
}

export default ForgotPassword;