import react from "react";
import { render } from "react-dom";
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


function NewPassword({ navigation }){
    return(
    <Container>
        <Title>New password</Title>
        <SubTitle>Your identity has been verified! Set your new password.</SubTitle>
        <Input
        placeholderTextColor="#484848"
        placeholder="New Password"
        ></Input>

        <Input
        placeholderTextColor="#484848"
        placeholder="Confirm Password"
        ></Input>

        <ButtonSubmit onPress={() => navigation.navigate('PasswordUpdated')}>
            <TextSubmit>Update</TextSubmit>
        </ButtonSubmit>
    </Container>
    )
}

export default NewPassword;