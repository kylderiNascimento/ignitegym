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

    const { sizes } = useTheme();

    return (
        <Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
        }}>
            <Screen name="home" 
                    component={Home} 
                    options={{ tabBarIcon:(props) => (<HomeSVG fill={props.color} width={sizes[6]} height={sizes[6]} /> ) }}
            />
            <Screen name="history" 
                    component={History} 
                    options={{ tabBarIcon:(props) => (<HistorySVG fill={props.color} width={sizes[6]} height={sizes[6]} /> ) }}
            />
            <Screen name="profile" 
                    component={Profile} 
                    options={{ tabBarIcon:(props) => (<ProfileSVG   fill={props.color} width={sizes[6]} height={sizes[6]} /> ) }}
            />
            <Screen name="exercise" 
                    component={Exercise} 
            />
        </Navigator>
    );
}