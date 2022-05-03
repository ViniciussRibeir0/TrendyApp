import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const KeyboardView = styled.KeyboardAvoidingView`
    background-color: #18171F;
    flex: 1; 
    align-items: center;
    justify-content: center;
`
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    width: 90%;
    padding: 20px;
`

export const View = styled.View`

`

export const Title = styled.Text`
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
    opacity: 0.4;
    margin-bottom: 30px;
`   

export const Input = styled.TextInput`
    padding: 15px 20px; 
    color: #fff;
    font-size: 15px;
    border-radius: 9px;
    width: 90%;
`

export const Image = styled.Image`
    
`

export const ButtonSubmit = styled.TouchableOpacity`
    backgroundColor: #22212D;
    border: 2px solid purple;
    border-radius: 7px;
    padding: 15px 20px;
    width: 105%;
    align-items: center;
    margin-bottom: 20px
`

export const RegisterSubmit = styled.TouchableOpacity`
    
`

export const ForgotSubmit = styled.TouchableOpacity`

`

export const GoogleSubmit = styled.TouchableOpacity`
    backgroundColor: white;
    border-radius: 7px;
    padding: 15px 20px;
    width: 105%;
    align-items: center;
    margin-bottom: 15px
`
export const FacebookSubmit = styled.TouchableOpacity`
    backgroundColor: #77ADFF;
    border-radius: 7px;
    padding: 15px 20px;
    width: 105%;
    align-items: center;
`

export const TextSubmit = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`

export const COLORS = {
    black: "#171717",
    white: "#FFFFFF",
    background: "#252C4A"
}