import React, { FC } from 'react'
import { Alert, Modal, Pressable, View, Text, FlatList } from 'react-native';
import { styles } from './LogsModal.styles';

interface LogsModalProps {
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void,
    logsObject: {objectData: object, stringData: string, key: string}[]
}

export const LogsModal:FC<LogsModalProps> = ({modalVisible, setModalVisible, logsObject}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList 
                        data={logsObject}
                        renderItem={({item}) => <View style={styles.logContainer}>
                            <Text style={styles.title}>{item.objectData.method}</Text>
                            <Text style={styles.modalText}>{item.stringData}</Text>
                        </View>}
                        keyExtractor={(item) => item.key}
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Hide Logs</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}
