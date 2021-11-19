import React from "react"
import {View,Text,SafeAreaView} from "react-native"
import { AppStyle } from "../../../Utils/AppStyles"
import { AppColors } from "../../../Utils/Colors"
import { ScreenProps } from "../../../Utils/Constants"
import BottomBar from "../Components/BottomBar/BottomBar"
import { HomeStyles } from "../Styles/HomeStyles"
import Home from "./Home"
const Container = (props : ScreenProps) =>{
    return(
        <View
        style = {HomeStyles.ContainerMainStyle}
        >
            <View
            style = {[AppStyle.MainViewStyle]}
            >
                <Home
                props = {props}
                />
            </View>
            <BottomBar
            onClick = {()=>{

            }}
            />
            <SafeAreaView
            style = {HomeStyles.SafeAreaPurpleStyle}
            />
        </View>
    )
}
export default Container