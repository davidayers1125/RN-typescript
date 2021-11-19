import React, { useEffect, useRef, useState } from "react"
import {View,Text,ImageBackground, SafeAreaView} from "react-native"
import { withSafeArea } from 'react-native-safe-area'
import Video from 'react-native-video';
import { AppStyle } from "../../../Utils/AppStyles"
import HomeLeftMenu from "../Components/Home/HomeLeftMenu"
import HomeRightMenu from "../Components/Home/HomeRightMenu"
import HomeTopBar from "../Components/Home/HomeTopBar"
import { HomeStyles } from "../Styles/HomeStyles";
import { HomeImages } from "../Utils/Constants"
interface HomeVideoListProps {
    onMenuTab : (index : number)=>void
    currentIndex : number,
    index : number
}
const HomeVideoList = (props :HomeVideoListProps )=>{
    const [paused,setPaused] = useState(true)
    useEffect(()=>{
        if (props.currentIndex == props.index) {
            setPaused(false)
        }
        else {
            setPaused(true)
        }
    })
    return(
        <View
        style = {HomeStyles.HomeVideoBackStyle}
        >
          <Video
          paused = {paused}
          
          source={{uri : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat = {true}
          style={HomeStyles.VideoStyle}
        />
  
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
        </View>
    )
}
export default HomeVideoList