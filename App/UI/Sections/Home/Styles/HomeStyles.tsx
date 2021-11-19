import { StyleSheet } from "react-native";
import { AppStyle } from "../../../Utils/AppStyles";
import { AppColors } from "../../../Utils/Colors";
import { AppFonts } from "../../../Utils/Constants";

export const HomeStyles = StyleSheet.create({
    BottomBarMainStyle : {
        backgroundColor : AppColors.lightPurpleColor,
    },
    BottomBarStyle : {
        alignItems : "center",
        justifyContent : "space-between",
        paddingHorizontal : 30,
        height : 60,
        backgroundColor : "transparent",
        flexDirection : "row"
    },
    BarStyle : {
        justifyContent : "center",
        alignItems : "center"
    },
    HomeTopBarStyles : {
        height : 60,
        alignItems : "flex-end",
        justifyContent : "center"
    },
    HomeCoinStyle : {
        width : 100,
        height : 32,
        justifyContent : "flex-end",
        alignItems : "center",
        zIndex : 1,
        flexDirection : "row",
        paddingHorizontal : 20,
        position : "absolute"

    },
    HomeTabStyle : {
        justifyContent : "space-around",
        alignItems : 'center',
        flexDirection : "row",
        zIndex : 0,
        width : 150,
        alignSelf : "center"
    },
    HomeRightSingleItemStyle : {
        paddingBottom : 20,
        alignItems : "center",
        paddingHorizontal : 20,

    },
    HomeLeftItemStyles : {
        paddingLeft : 20,
        marginBottom : 20,
    },
    ContainerMainStyle : {
        ...AppStyle.MainViewStyle,justifyContent : "flex-end"
    },
    SafeAreaPurpleStyle : {
        backgroundColor : AppColors.lightPurpleColor
    },
    HomeTopViewStyle : {
        zIndex : 1,
        position : "absolute",
        width : "100%"
    },
    HomeListStyle : {
        zIndex : 0,
    },
    HomeCommonStyle : {
        flex : 1,
        justifyContent : "flex-end",
        alignItems : "flex-end",
        flexDirection : "row",
    },
    HomeVideoBackStyle : {
        ...AppStyle.MainViewStyle,backgroundColor : "black"
    },
    VideoStyle : {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    NormalStyle : {
        alignItems : "flex-end",
        justifyContent : "center",
    },
    HomeRightMenuMainStyle : {
        justifyContent : "flex-end",paddingHorizontal : 10,
        paddingBottom : 20,
        alignItems : "flex-end",
    },
    ProfileViewStyle : {
        zIndex : 1,
        position : "absolute",
        height : 20,
        width : 20,
        justifyContent : "center",
        alignItems : "center",
        alignSelf : "center",
        paddingBottom : 20
    },
    LikeNumberStyle : {
        ...AppStyle.ProximaReg,fontSize : 12,color : "white",
        textAlign : "center"
    },
    CommentNumberStyle : {
        ...AppStyle.ProximaReg,fontSize : 12,color : "white",
        textAlign : "center"
    },
    HomeLinkTopTextStyle : {
        ...AppStyle.ProximaReg,fontSize : 12,color : "white",paddingBottom : 10
    },
    MusicStyle : {
        flexDirection : "row",
        justifyContent : "flex-start"
    },
    AllCenterStyle : {
        justifyContent : "center",
        alignItems : "center"
    },
    CenterLineStyle : {
        width : 1,
        height : 10,
        backgroundColor : "white"
    },
    CoinTextStyle : {
        ...AppStyle.SfProSemiBold,fontSize : 14,
            color : "white",paddingLeft : 8
    },
    ProfilePic: {
        width: 60,
        height: 60
    }
})
export const HomePropsStyle = (props : any) => StyleSheet.create({
    HomeRenderItemStyle : {
        height : props,
        flex : 1
    },
    HomeTabTextStyle : {
     fontSize : 16,color : "white",fontFamily : props == 0 ? AppFonts.ProximaNovaSemiBold : AppFonts.ProximaNovaReg
    },
    FollwingUnderLine : {
        height : 1.7,
        width : 20,
        marginTop : 5,
        backgroundColor : "white",
        opacity : props == 0 ? 1 : 0
    },
    HomeYouTextStyle : {
        fontSize : 16,color : "white",fontFamily : props == 1 ? AppFonts.ProximaNovaSemiBold : AppFonts.ProximaNovaReg
    },
    HomeYouUnderLine : {
        height : 1.7,
        width : 20,
        marginTop : 5,
        backgroundColor : "white",
        opacity : props == 1 ? 1 : 0
    },
})