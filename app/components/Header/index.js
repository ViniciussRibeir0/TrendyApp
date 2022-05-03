import { Text, Image, StyleSheet } from "react-native";
import { Container } from './styles';
import Logo from '../../assets/logo.png';
import { LinearGradient } from 'expo-linear-gradient';

function Header() {
    return(
        <Container>
            <Image style={[styles.image]} 
                source={Logo}
            />
        </Container>
    )
}    

export default Header;

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        width: 200,
        height: 100,
    },
    background: {
        backgroundColor: '#171717',
    }
})