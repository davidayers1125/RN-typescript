import React from "react"
import {View,Text, Image} from  "react-native"
import { AppStyle } from "../../../../Utils/AppStyles"
import { HomeStyles } from "../../Styles/HomeStyles"
import { HomeImages } from "../../Utils/Constants"
const HomeLeftMenu = () =>{
    return(
        <View
        style = {[HomeStyles.HomeLeftItemStyles]}
        >
                 <Text
                style = {HomeStyles.HomeLinkTopTextStyle}
                >
                    @sabriina.calvo
                </Text>
                <Text
                style = {HomeStyles.HomeLinkTopTextStyle}
                >
                    Who put my shirt in the dryer? 😑
                </Text>
                <Text
                style = {HomeStyles.HomeLinkTopTextStyle}
                >
                    #sabriina #sabriinacalvo
                </Text>
            <View
            style = {HomeStyles.MusicStyle}
            >
                <Image
                source = {HomeImages.Music}
                />
                <Text
                style = {HomeStyles.HomeLinkTopTextStyle}
                >
                See I know a little bit something good
                </Text>
            </View>
        </View>
    )
}
export default HomeLeftMenu