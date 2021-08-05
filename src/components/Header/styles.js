import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../helpers/contants";

export const styles = StyleSheet.create({
    container: {
        height: dimensions.windowHeight - 500,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    infoProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInfoUser: {
        fontSize: 25,
        color: colors.whiteLight
    }
})