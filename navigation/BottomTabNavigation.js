import { Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import News from '../pages/News/News';
import Profile from '../pages/Profile/Profile';
import IconMan from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='Home' component={Home} />
        </Stack.Navigator>
    )
}

const screenOptions = {
    tabBarShowLabels: false,
    tabBarHideOnKeyboard: true,
    tabBarLabel: () => { return null },
    headerShow: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 5,
        right: 0,
        left: 0,
        elevation: 0,
        height: 52,
        marginHorizontal: 15,
        // paddingVertical: 20,
        alignItem: 'center',
        flexDirection: 'row',
        // paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowRadius: 20,
        shadowOpacity: 0.1
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeStack}
                tabBarShowLabels={false}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <>
                            <Icon name={focused ? "home-search-outline" : "home-search-outline"} size={22} color={focused ? '#872341' : 'black'} />
                            <Text style={{ color: focused ? '#872341' : 'black', fontWeight: '600', fontSize: 12 }}  >Home</Text>
                        </>
                    }
                }} />
            <Tab.Screen name="News" component={News}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <>
                            <Entypo name={focused ? "news" : "news"} size={22} color={focused ? '#872341' : 'black'} />
                            <Text style={{ color: focused ? '#872341' : 'black', fontWeight: '600', fontSize: 12 }} >News</Text>
                        </>
                    }
                }} />
                <Tab.Screen name="Profile" component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <>
                            <IconMan name={focused ? "person" : "person"} size={22} color={focused ? '#872341' : 'black'} />
                            <Text style={{ color: focused ? '#872341' : 'black', fontWeight: '600', fontSize: 12 }} >Profile</Text>
                        </>
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation