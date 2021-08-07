import { StyleSheet } from "react-native";
import { colors } from "../../helpers/contants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d0d0d5',
        width: '100%',
        borderRadius: 10
    },
    msjError: {
        color: colors.primary,
        fontWeight: 'bold'
    }
})