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
    Afirmativo,
 }  from './styles'
import  AfirmativoImg  from '../../assets/Afirmativo.png';

function PasswordUpdated({ navigation }) {
    return(
        <Container>
            <Title>Password Updated!</Title>
            <Afirmativo source={AfirmativoImg} />
            <SubTitle style={{marginTop: 20}}>You Password has been updated!</SubTitle>
            <ButtonSubmit onPress={() => navigation.navigate('Signin')}>
                <TextSubmit>Login</TextSubmit>
            </ButtonSubmit>
        </Container>
    )
}      

export default PasswordUpdated;