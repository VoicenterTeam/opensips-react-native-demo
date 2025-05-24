import React, { FC, useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigator';
import { useReactSip } from '@voicenter-team/react-native-opensips';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './HomeScreen.styles';
import { Button, View } from 'react-native';
import { Numpad, NumberInput, CallButton, LogsModal } from './components';
import { ActiveCallList } from './components/ActiveCallsList/ActiveCallList';

type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>

export const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
    const [number, setNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const [logsObject, setLogsObject] = useState<{objectData: object, stringData: string, key: string}[]>([])
    const { actions } = useReactSip();

    const onTransportCallback = useCallback((objectMessage: object, stringMessage: string) => {
        const objectCopy = logsObject
        objectCopy.unshift({objectData: objectMessage, stringData: stringMessage, key: new Date().getTime().toString()})
        setLogsObject(objectCopy)
    }, [logsObject])

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="Logs" onPress={() => setModalVisible(true)} />
            ),
        });
    }, [navigation]);

    const initSip = useCallback((
        domain: string,
        username: string,
        password: string) => {
        const pnExtraHeaderes = {
            'pn-provider': 'fcm',
            'pn-param': 'voicenter-mobile',
            'pn-prid': '',
            'pn-strategy': 'all',
        };
        actions.init(domain, username, password, pnExtraHeaderes, undefined, onTransportCallback);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                actions.disconnect();
                actions.stop();
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    );
    useEffect(() => {
        const { domain, username, password } = route.params;
        initSip(domain, username, password);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <LogsModal modalVisible={modalVisible} setModalVisible={setModalVisible} logsObject={logsObject}/>
            <ActiveCallList />
            <View style={styles.numberInputContainer}>
                <NumberInput value={number} onChange={setNumber} />
                <Numpad onPressKey={(value) => setNumber(prev => prev + value)} />
                <View style={styles.callButtonContainer}>
                    <CallButton onPress={() => actions.initCall(number, false)} />
                </View>
            </View>
        </SafeAreaView>
    );
};
