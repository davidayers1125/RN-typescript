import React from "react"
import {View,Text,ImageBackground, SafeAreaView} from "react-native"
import { withSafeArea } from 'react-native-safe-area'
import { AppStyle } from "../../../Utils/AppStyles"
import HomeLeftMenu from "../Components/Home/HomeLeftMenu"
import HomeRightMenu from "../Components/Home/HomeRightMenu"
import HomeTopBar from "../Components/Home/HomeTopBar"
import { HomeStyles } from "../Styles/HomeStyles"
import { HomeImages } from "../Utils/Constants"
interface HomeListProps {
    onMenuTab : (index : number)=>void
}
const HomeList = (props :HomeListProps )=>{
    return(
        <ImageBackground
        source = {HomeImages.clientImage}
        style = {[AppStyle.MainViewStyle,{}]}
        >
            <View
            style = {HomeStyles.HomeCommonStyle}
            >
                <View
                style = {AppStyle.MainViewStyle}
                >
                <HomeLeftMenu/>
                </View>
                <HomeRightMenu
                onMenuTab = {(index)=>props.onMenuTab(index)}
                />
            </View>
        </ImageBackground>
    )
}
export default HomeList