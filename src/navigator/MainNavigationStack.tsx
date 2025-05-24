import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '@screens';
import { FC } from 'react';
import { useColorScheme } from 'react-native';

export type MainStackParamList = {
    Home: { username: string, password: string, domain: string };
    Login: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigationStack: FC = () => {

    const isDarkMode = useColorScheme() === 'dark';
    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
