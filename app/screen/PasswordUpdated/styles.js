import react from "react";
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    width: 100%;
    background-color: #18171F; 
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 36px;
    font-weight: 700;
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    opacity: 0.4;
    margin-bottom: 30px;
    text-align: center;
`  

export const Input = styled.TextInput`
    border: 2px solid #484848;
    margin-bottom: 20px;
    padding: 15px 20px; 
    color: #fff;
    font-size: 15px;
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    backgroundColor: #22212D;
    border: 2px solid purple;
    border-radius: 7px;
    padding: 10px 20px;
    width: 50%;
    align-items: center;
    margin-bottom: 20px
`

export const TextSubmit = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`

export const Afirmativo = styled.Image`
    margin-top: 50px
`