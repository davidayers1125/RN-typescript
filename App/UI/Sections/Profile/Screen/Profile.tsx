import React from "react"
import {View,Text,Image,TouchableWithoutFeedback, SafeAreaView} from "react-native"
import { AppStyle } from "../../../Utils/AppStyles"
import { ScreenProps } from "../../../Utils/Constants"
import GalleryView from "../Component/GalleryView"
import ProfileDetail from "../Component/ProfileDetail"
import ProfileTabView from "../Component/ProfileTabView"
import ProfileTopBar from "../Component/ProfileTopBar"
import { ProfileStyles } from "../Utils/ProfileStyle"
const Profile = (props : ScreenProps) =>{
    return(
        <View
        style = {AppStyle.MainViewStyle}
        >
            <SafeAreaView 
            style = {ProfileStyles.SafeAreaWhite}
            />
            <ProfileTopBar
            onBackClick = {()=>{
                props.navigation.goBack()
            }}
            />
            <ProfileDetail/>
            <ProfileTabView/>
            <View
            style = {[AppStyle.MainViewStyle]}
            >
            <GalleryView/>
            </View>
        </View>
    )
}
export default Profile