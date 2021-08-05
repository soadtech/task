import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efddda'
    },
    containerHeader: {
        position: 'relative'
    },
    containerCardsCategory: {
        flex: 1,
        position: 'absolute',
        bottom: -60,
        paddingHorizontal: 20,
        width: '100%',
        zIndex: 200
    }
})