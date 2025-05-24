import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    callListContainer: {
        flex: 1 / 2,
        borderWidth: 1,
        borderColor: '#DCE2ED',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5
    },
    callItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    callItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
})