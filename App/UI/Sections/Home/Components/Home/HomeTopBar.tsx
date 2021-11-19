import React, { useState } from "react"
import {View,Text,Image} from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { AppStyle } from "../../../../Utils/AppStyles"
import { AppFonts } from "../../../../Utils/Constants"
import { HomePropsStyle, HomeStyles } from "../../Styles/HomeStyles"
import { HomeImages } from "../../Utils/Constants"
const HomeTopBar = ()=>{
    const [tab,selectedTab] = useState(1)
    return(
        <View
        style = {[HomeStyles.HomeTopBarStyles]}
        >
            <View
            style = {HomeStyles.HomeTabStyle}
            >
                <TouchableWithoutFeedback
                onPress = {()=>selectedTab(0)}
                >
                    <View
                      style = {HomeStyles.AllCenterStyle}
                    >
                        <Text
                        style = {HomePropsStyle(tab).HomeTabTextStyle}
                        >
                        Following
                        </Text>
                        <View
                        style = {HomePropsStyle(tab).FollwingUnderLine}
                        >
                      </View>
                    </View>
                </TouchableWithoutFeedback>
                <View
                style = {HomeStyles.CenterLineStyle}
                >

                </View>
                <TouchableWithoutFeedback
               onPress = {()=>selectedTab(1)}
                >
                    <View
                    style = {HomeStyles.AllCenterStyle}
                    >
                        <Text
                        style = {HomePropsStyle(tab).HomeYouTextStyle}
                        >
                        For you
                        </Text>
                        <View
                        style = {HomePropsStyle(tab).HomeYouUnderLine}
                        >

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View
            style = {HomeStyles.HomeCoinStyle}
            >
                <Image
                source = {HomeImages.Coin}
                />
                <Text
                style = {HomeStyles.CoinTextStyle}
                >
                100
                </Text>
            </View>
        </View>
    )
}
export default HomeTopBar