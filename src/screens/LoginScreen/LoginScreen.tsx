import { MainStackParamList } from '@navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { AuthInput } from './components/AuthInput/AuthInput';
import { styles } from './LoginScreen.styles';
import Logo from '@assets/icons/logo.svg'
type LoginScreenProps = NativeStackScreenProps<MainStackParamList, 'Login'>

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [domain, setDomain] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={styles.inputContainer}>
                <AuthInput label="Username" value={username} onChangeText={setUsername} />
                <AuthInput label="Password" value={password} onChangeText={setPassword} />
                <AuthInput label="Domain" value={domain} onChangeText={setDomain} />
            </View>
            <Button title="Register" disabled={!username || !password || !domain} onPress={() => navigation.navigate('Home', { username, password, domain })} />
        </SafeAreaView>
    );
};
