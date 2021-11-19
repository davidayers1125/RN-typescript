import React from "react"
import {View,Text,TouchableWithoutFeedback,Image} from "react-native"
import { AppStyle } from "../../../Utils/AppStyles"
import { AppColors } from "../../../Utils/Colors"
import { ProfileImages } from "../Utils/Constant"
import { ProfileStyles } from "../Utils/ProfileStyle"
const ProfileDetail = () =>{
    return(
        <View
        style = {ProfileStyles.ProfileDetail}
        >
            <Image
            style = {ProfileStyles.ProfilePic}
            source = {ProfileImages.profilePic}
            />
            <Text
            style = {ProfileStyles.LinkStyle}
            >
            @hopebeel  
            </Text>
            <View
            style = {ProfileStyles.ProfileSocialStyle}
            >
                <View
                style = {AppStyle.CommonStyle}
                >
                    <Text
                    style = {ProfileStyles.NumberStyle}
                    >
                    504
                    </Text>
                    <Text
                    style = {ProfileStyles.FollowStyle}
                    >
                    Following
                    </Text>
                </View>
                <View
                style = {ProfileStyles.SocialStyle}
                >
                    <View
                    style = {ProfileStyles.seperatorStyle}
                    >
                    </View>
                <View
                style = {AppStyle.CommonStyle}
                >
                    <Text
                    style = {ProfileStyles.FanNumberStyle}
                    >
                    201.08K
                    </Text>
                    <Text
                    style = {ProfileStyles.FanTitleStyle}
                    >
                    Fans
                    </Text>
                </View>
                <View
                    style = {ProfileStyles.seperatorStyle}
                    >
                    </View>
                </View>
                <View
                style = {AppStyle.CommonStyle}
                >
                    <Text
                    style = {ProfileStyles.FanNumberStyle}
                    >
                    2.8M
                    </Text>
                    <Text
                    style = {ProfileStyles.FanTitleStyle}
                    >
                    Hearts
                    </Text>
                </View>
            </View>
            <View
            style = {ProfileStyles.ProfileFollowStyle}
            >
                <TouchableWithoutFeedback>
                    <View
                    style = {
                        ProfileStyles.FollowBtnStyle
                    }
                    >
                        <Text
                        style = {ProfileStyles.FollowTextStyle}
                        >
                        Follow
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                    style = {ProfileStyles.DropDownStyle}
                    >
                        <Image
                        source = {ProfileImages.dropDown}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Text
            style = {ProfileStyles.DescStyle}
            >
            Get fit with Hope through one on one personal training in the Dallas Fort Worth metroplex. 
            </Text>
            <TouchableWithoutFeedback>
            <View
            style = {ProfileStyles.attachImageStyle}
            >
                <Image
                source = {ProfileImages.attachment}
                />
                <Text
                style = {ProfileStyles.webLinkStyle}
                >
                hopebeel.com
                </Text>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default ProfileDetail