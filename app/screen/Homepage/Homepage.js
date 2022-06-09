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


const Drawer = createDrawerNavigator();

const trendsData = [
    {   
        title: 'Trending Now',
        image: 'https://images.ctfassets.net/b4k16c7lw5ut/jOc1IyE2cWic48QMS1mKb/24de5fb94d45b4fc9d0247a293298c31/Blog_thumbnails_-_2022-02-03T111636.748.png?w=1920&h=1080&q=50&fm=webp'
    },
    {   
        title: 'Trending Nunca',
        image: 'https://images.ctfassets.net/b4k16c7lw5ut/jOc1IyE2cWic48QMS1mKb/24de5fb94d45b4fc9d0247a293298c31/Blog_thumbnails_-_2022-02-03T111636.748.png?w=1920&h=1080&q=50&fm=webp'
    },
    {   
        title: 'Trending Now',
        image: 'https://images.ctfassets.net/b4k16c7lw5ut/jOc1IyE2cWic48QMS1mKb/24de5fb94d45b4fc9d0247a293298c31/Blog_thumbnails_-_2022-02-03T111636.748.png?w=1920&h=1080&q=50&fm=webp'
    }
]

const musicsData = [
    {
        title: 'Hot Music',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/963977687804833882/harry_styles.jpg'
    },
    {
        title: 'Hot Music',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/963977687452495882/artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg'
    },
    {
        title: 'Hot Music',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/963977687804833882/harry_styles.jpg'
    }
]

const moviesData = [
    {
        title: 'Hot Movies',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/963979691683893268/batman.webp'
    },
    {
        tile: 'Secrets',
        image: 'https://pbs.twimg.com/media/FMsKCLpVEAA7Y81?format=jpg&name=4096x4096'
    },
    {
        title: 'Hot Movies',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/963979691683893268/batman.webp'
    }
];

const Tab = createBottomTabNavigator();

function Homepage({ navigation }){

    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>{item.title}</Text>
                    <TouchableOpacity>
                    <Image style={{width:'100%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
            </View>
        );
    }

    

    return (

        
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
                    justifyContent: 'space-between',
                }}
                >
                    <Text style={{color:'white', fontFamily: 'Poppins_500Medium', fontSize:20}}>Trends</Text>
                    <SeeAll>
                    <Text style={{color:'purple', fontFamily: 'Poppins_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                    </SeeAll>
                </View>

                <Carousel 
                    data={trendsData}
                    renderItem={renderItem.bind(this)}
                    sliderWidth={300}
                    itemWidth={200}
                    useScrollView={true}
                />

                <View
                style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >
                    <Text style={{color:'white', fontFamily: 'Poppins_500Medium', fontSize:20}}>Musics</Text>
                    <SeeAll>
                    <Text style={{color:'purple', fontFamily: 'Poppins_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                    </SeeAll>
                </View>

                <Carousel 
                    data={musicsData}
                    renderItem={renderItem.bind(this)}
                    sliderWidth={300}
                    itemWidth={200}
                    useScrollView={true}
                />  

                <View
                style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >
                    <Text style={{color:'white', fontFamily: 'Poppins_500Medium', fontSize:20}}>Movies</Text>
                    <SeeAll>
                    <Text style={{color:'purple', fontFamily: 'Poppins_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                    </SeeAll>
                </View>

                <Carousel 
                    data={moviesData}
                    renderItem={renderItem.bind(this)}
                    sliderWidth={300}
                    itemWidth={200}
                    useScrollView={true}
                />

            </ScrollView>

                
                
        </Container>
        
    )
}


export default Homepage;

