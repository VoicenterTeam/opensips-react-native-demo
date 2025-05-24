import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Phone from '@assets/icons/phone.svg'
import { styles } from './CallButton.styles'

interface CallButtonProps {
    onPress: () => void
}

export const CallButton:FC<CallButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Phone color={'transparent'} fill={'white'} height={48} width={48}/>
    </TouchableOpacity>
  )
}
