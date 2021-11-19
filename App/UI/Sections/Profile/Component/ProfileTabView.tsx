import React, { useEffect, useState } from "react"
import {View,Text,TouchableWithoutFeedback, Image, Dimensions} from "react-native"
import Animated, {
    withTiming,
    useSharedValue,
    useAnimatedStyle,
    Easing,
    interpolate,
  } from 'react-native-reanimated';
import { AppStyle } from "../../../Utils/AppStyles"
import { AppColors } from "../../../Utils/Colors"
import { ProfileImages } from "../Utils/Constant"
import { ProfileStyles } from "../Utils/ProfileStyle"
const screenWidth = Dimensions.get("screen").width
const screenHalf = screenWidth/4
const ProfileTabView = () =>{
    const [tab,selectTab] = useState(0)
    const tabValue = useSharedValue(0)
    useEffect(()=>{
        tabValue.value = withTiming(
            tab == 0 ? 0 : 1,
            {
                duration : 350
            }
        )
    })
    const sliderStyle = useAnimatedStyle(()=>{
        return{
            backgroundColor : AppColors.darkBrownColor,
            height : 3,
            width : 52,
            transform : [
                {
                    translateX : interpolate(
                        tabValue.value,
                        [0,1],
                        [screenWidth/2 - 27 - screenHalf,screenWidth/2 + screenHalf - 27 ]
                    )
                }
            ]
        }
    })
    return(
        <View
        style = {ProfileStyles.ProfileTab}
        >
            <View
            style = {ProfileStyles.ProfileTabSeperatorStyle}
            >
            </View>
            <View
            style = {ProfileStyles.ProfileTabStyle}
            >
                <TouchableWithoutFeedback
                onPress = {()=>selectTab(0)}
                >
                    <View
                    style = {AppStyle.CommonStyle}
                    >
                 <Image
                source = {tab == 0 ? ProfileImages.gallery :ProfileImages.galleryUnselected}
                />
                   </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
              onPress = {()=>selectTab(1)}
                >
                    <View
                    style = {AppStyle.CommonStyle}
                    >
                <Image
                source = {tab == 1 ? ProfileImages.lock : ProfileImages.lockUnselected}
                />
                 </View>
                </TouchableWithoutFeedback>
            </View>
            <View
            style = {{
                width : "100%",
            }}>
                <Animated.View
                style = {sliderStyle}
                >

                </Animated.View>
                </View>
        </View>
    )
}
export default ProfileTabView