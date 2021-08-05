import { StyleSheet } from "react-native";
import { colors } from "../../helpers/contants";

export const styles = StyleSheet.create({
    botton: {
        backgroundColor: colors.primary,
        borderRadius: 150,
        paddingHorizontal: 25,
        paddingVertical: 16,
        alignSelf: 'center',
        position: "absolute",
        bottom: 10, right: 10
    },
    icon: {
        color: '#FFF',
        fontSize: 20
    }
})