import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Home,
    CreateContact,
    UpdateContact
} from './components/templates'

const homeStack = 'Home';
const homeName = 'Contact';
const createName = 'Add Contact';
const updateName = 'Update Contact';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab(){
    return (
        <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === homeName){
                            iconName = focused ? 'people' : 'people-outline'
                        } else {
                            iconName = focused ? 'add-circle': 'add-circle-outline'
                        }

                        return <Icon name={iconName} size={35} color={color} />
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#26264B',
                    tabBarInactiveTintColor: '#DEDDDD',
                    tabBarStyle: {
                        padding: 10, height: 80,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 10
                      }
                })}
                >
                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={createName} component={CreateContact} />
            </Tab.Navigator>
    )
}
  
function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={homeStack} 
                screenOptions={({route}) => ({
                        headerShown: false,
                    })}>
                <Stack.Screen name={homeStack} component={HomeTab} />
                <Stack.Screen name={updateName} component={UpdateContact} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;