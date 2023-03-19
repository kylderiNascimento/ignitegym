import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSVG from '@assets/home.svg';
import HistorySVG from '@assets/history.svg';
import ProfileSVG from '@assets/profile.svg';

import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){

    const { sizes, colors } = useTheme();

    const iconSize = sizes[6];

    return (
        <Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]
            }
        }}>
            <Screen name="home" 
                    component={Home} 
                    options={{ tabBarIcon:(props) => (<HomeSVG fill={props.color} width={iconSize} height={iconSize} /> ) }}
            />
            <Screen name="history" 
                    component={History} 
                    options={{ tabBarIcon:(props) => (<HistorySVG fill={props.color} width={iconSize} height={iconSize} /> ) }}
            />
            <Screen name="profile" 
                    component={Profile} 
                    options={{ tabBarIcon:(props) => (<ProfileSVG   fill={props.color} width={iconSize} height={iconSize} /> ) }}
            />
            <Screen name="exercise" 
                    component={Exercise} 
                    options={{ tabBarButton: () => null }}
            />
        </Navigator>
    );
}