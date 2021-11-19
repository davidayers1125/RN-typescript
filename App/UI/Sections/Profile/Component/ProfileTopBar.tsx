import React from "react";
import {View,Text,Image,TouchableWithoutFeedback} from "react-native"
import { AppStyle } from "../../../Utils/AppStyles";
import { ProfileImages } from "../Utils/Constant";
import {ProfileStyles} from "../Utils/ProfileStyle"
interface ProfileTopBarProps {
    onBackClick : ()=>void
}
const ProfileTopBar = (props :ProfileTopBarProps)=>{
    return(
        <View
        style = {ProfileStyles.ProfileTopBar}
        >
            <TouchableWithoutFeedback
            onPress = {()=>props.onBackClick()}
            >
                <Image
                source = {ProfileImages.PurpleBack}
                />
            </TouchableWithoutFeedback>
            <Text
            style = {ProfileStyles.ProfileTitleStyle}
            >
            Hope Beel
            </Text>
            <TouchableWithoutFeedback>
                <Image
                source = {ProfileImages.menuHori}
                />
            </TouchableWithoutFeedback>
        </View>
    )
}
export default ProfileTopBar