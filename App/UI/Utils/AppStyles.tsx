import { StyleSheet,Dimensions } from "react-native";
import { AppFonts } from "./Constants";
export const screenWidth = Dimensions.get("screen").width
export const AppStyle = StyleSheet.create({
    MainViewStyle: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    CommonStyle : {
        justifyContent : "center",
        alignItems : "center",
        flex : 1
    },
    SfProSemiBold : {
        fontFamily : AppFonts.SfProDisplaySemiBold
    },
    ProximaReg : {
        fontFamily : AppFonts.ProximaNovaReg
    },
    ProximaSemiBold : {
        fontFamily : AppFonts.ProximaNovaSemiBold
    },
    ProximaBold : {
        fontFamily : AppFonts.ProximaNovaBold
    }
})