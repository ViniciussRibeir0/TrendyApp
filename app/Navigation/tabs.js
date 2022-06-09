import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../screen/Homepage/Homepage'
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;