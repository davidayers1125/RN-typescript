import { StyleSheet } from "react-native";
import { AppStyle, screenWidth } from "../../../Utils/AppStyles";
import { AppColors } from "../../../Utils/Colors";

export const ProfileStyles =  StyleSheet.create({
    ProfileTopBar : {
        height : 60,
        justifyContent : "space-between",
        paddingHorizontal : 20,
        alignItems : "center",
        flexDirection : "row",
        backgroundColor : "white"
    },
    ProfileDetail : {
        alignItems : "center",
        marginTop : 20,
        marginBottom : 20
    },
    ProfileSocialStyle : {
        height : 41,
        justifyContent : "space-between",
        alignItems : "center",
        flexDirection : "row",
        marginTop : 20,
        width : 250
    },
    seperatorStyle : {
        height : 16,
        width : 1,
        backgroundColor : AppColors.lightGrey,
    },
    ProfileFollowStyle : {
        marginTop : 20,
        height : 44,
        width : 213,
        justifyContent : "space-between",
        flexDirection : "row",
    },
    ProfileTab : {
        height : 60,
    },
    ProfileTabSeperatorStyle : {
        height : 1,
        backgroundColor : AppColors.lightGrey,
    },
    ProfileTabStyle : {
        flex : 1,
        justifyContent : "space-evenly",
        alignItems : "center",
        flexDirection : "row"
    },
    SafeAreaWhite : {
            backgroundColor : "white"
    },
    LinkStyle : {...AppStyle.ProximaSemiBold,
        fontSize :18,paddingTop : 15
    },
    NumberStyle : {
        ...AppStyle.ProximaBold,fontSize : 17
    },
    FollowStyle : {
        ...AppStyle.ProximaReg,fontSize : 13,color : AppColors.grey,marginTop : 3
    },
    SocialStyle : {
        flexDirection : "row",
        flex : 1,
        justifyContent : "space-between",
        alignItems : "center",
        paddingHorizontal : 20
    },
    FanNumberStyle : {
        ...AppStyle.ProximaBold,fontSize : 17
    },
    FanTitleStyle : {
        ...AppStyle.ProximaReg,fontSize : 13,color : AppColors.grey,marginTop : 3
    },
    FollowBtnStyle : {
        backgroundColor : AppColors.lightPurpleColor,
        borderRadius : 8,
        justifyContent : "center",
        alignItems : "center",
        flex : 1
    },
    FollowTextStyle : {
        ...AppStyle.ProximaSemiBold,fontSize : 16,color : "white"
    },
    DropDownStyle : {
        backgroundColor : AppColors.lightAncientColor,
        borderRadius : 6,
        justifyContent : "center",
        alignItems : "center",
        width : 44,
        marginLeft : 5
    },
    DescStyle : {
        ...AppStyle.ProximaReg,fontSize : 14,marginTop : 20,
            marginHorizontal : 20,
            textAlign : "center"
    },
    attachImageStyle : {
        marginTop : 15,
        flexDirection : "row"
    },
    webLinkStyle : {
        ...AppStyle.ProximaSemiBold,fontSize : 14,paddingLeft : 5
    },
    ProfileTitleStyle : {
        ...AppStyle.ProximaBold,fontSize : 18
    },
    GalleryViewsStyle : {
        ...AppStyle.SfProSemiBold,fontSize : 12,color : "white",paddingLeft : 10
    },
    ProfilePic: {
        width: 120,
        height: 120
    }

})
export const ProfilePropsStyle = (props : any) => StyleSheet.create({
    ProfileGalleryImageStyle : {
        justifyContent : "flex-start",
        alignItems : "flex-end",
        paddingLeft : 15,
        flexDirection : "row",
        height : 268,
        width : props + 1 & 1 ? screenWidth/2 : screenWidth/2 - 10,
        paddingBottom : 20,
        marginLeft : props + 1 & 1 ? 0 : 10,
        marginBottom : 10
    }
})