import { ICall, useReactSip } from '@voicenter-team/react-native-opensips'
import React, { FC, useMemo } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { styles } from './ActiveCallList.styles'

export const ActiveCallList = () => {
    const { state } = useReactSip()
    const activeCalls = useMemo(() => {
        return Object.keys(state.activeCalls).map(callId => state.activeCalls[callId])
    }, [state.activeCalls])
  return (
    <FlatList 
        style={styles.callListContainer}
        data={activeCalls}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => <ActiveCallItem call={item}/>}
        ListHeaderComponent={() => <Text>ActiveCalls: </Text>}
    />
  )
}

interface ActiveCallItemProps {
    call: ICall
}

const ActiveCallItem:FC<ActiveCallItemProps> = ({call}) => {
    const { state, actions } = useReactSip()

    const callTime = useMemo(() => {
        if (state.callTime[call?._id]) {
            return state.callTime[call?._id].formatted
        } else {
            return '00:00:00'
        }
    }, [ state.callTime[call._id] ])

    return (
        <View style={styles.callItemContainer}>
            <Text>
                {call._remote_identity._uri._user}
            </Text>
            <View style={styles.callItemRight}>
                <Text>{callTime}</Text>
                <Button title='Terminate' onPress={() => actions.terminateCall(call._id)}/>
            </View>
        </View>
    )
}