import React from "react"
import {View,Text,Image,TouchableWithoutFeedback} from "react-native"
import { AppStyle } from "../../../../Utils/AppStyles"
import { HomeStyles } from "../../Styles/HomeStyles"
import { HomeImages } from "../../Utils/Constants"
interface HomeRightMenuProps {
    onMenuTab : (index : number)=>void
}
const HomeRightMenu = (props :HomeRightMenuProps ) =>{
    return(
        <View
        style = {HomeStyles.NormalStyle}
        >
          <TouchableWithoutFeedback
          onPress = {()=>props.onMenuTab(0)}
          >
            <View
            style = {HomeStyles.HomeRightMenuMainStyle}
            >
                <Image
                style = {[HomeStyles.HomeListStyle, HomeStyles.ProfilePic]}
                source = {HomeImages.profilePic}
                />
                <View
                style = {HomeStyles.ProfileViewStyle}
                >
                    <Image
                    source = {HomeImages.plus}
                    />
                </View>
                </View>
            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback>
            <View
            style = {HomeStyles.HomeRightSingleItemStyle}
            >
                <Image
                source = {HomeImages.like}
                />
                <Text
                style = {HomeStyles.LikeNumberStyle}
                >
                510.8k
                </Text>
                </View>
            </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
            <View
            style = {HomeStyles.HomeRightSingleItemStyle}
            >
                <Image
                source = {HomeImages.comment}
                />
                <Text
                style = {HomeStyles.LikeNumberStyle}
                >
                6666
                </Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
            <View
            style = {HomeStyles.HomeRightSingleItemStyle}
            >
                <Image
                source = {HomeImages.share}
                />
                <Text
                style = {HomeStyles.LikeNumberStyle}
                >
                Share
                </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <View
            style = {HomeStyles.HomeRightSingleItemStyle}
            >
                <Image
                source = {HomeImages.sound}
                />
                            </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback>
            <View
            style = {HomeStyles.HomeRightSingleItemStyle}
            >
                <Image
                source = {HomeImages.gift}
                />
          </View>

            </TouchableWithoutFeedback>
        </View>
    )
}
export default HomeRightMenu