import React, { useEffect, useState } from "react"
import {View,FlatList,Dimensions, SafeAreaView,Platform} from "react-native"
import {StatusBar} from 'react-native';
import SafeArea from "react-native-safe-area"
import { AppStyle } from "../../../Utils/AppStyles"
import { ScreenProps } from "../../../Utils/Constants"
import { ScreenNames } from "../../../Utils/Enums"
import HomeTopBar from "../Components/Home/HomeTopBar"
import { HomePropsStyle, HomeStyles } from "../Styles/HomeStyles";
import HomeList from "./HomeList"
import HomeVideoList from "./HomeVideoList";
const screenHeight = Dimensions.get("window").height
interface HomeProps {
    props : ScreenProps
}
const Home = ({props} : HomeProps) =>{
    const [height,setHeight] = useState(screenHeight)
    const [currentIndex,setCurrentIndex] = useState(0)
    useEffect (()=>{
            SafeArea.getSafeAreaInsetsForRootView()
          .then((result) => {
            console.log(result)
            if (Platform.OS == "ios") {
            setHeight(screenHeight - 60 - result.safeAreaInsets.bottom)
            }
            else {
                console.log('statusBarHeight: ', StatusBar.currentHeight);
                if (StatusBar.currentHeight) {
                    setHeight(screenHeight  - 60 - result.safeAreaInsets.bottom - StatusBar.currentHeight )
                }
                else {
                setHeight(screenHeight  - 60 - result.safeAreaInsets.bottom )
                }
            }
          })
        
        },[])
    return(
        <View
        style = {[AppStyle.MainViewStyle]}
        >
            <View
            style = {HomeStyles.HomeTopViewStyle}
            >
            <SafeAreaView/>
            <HomeTopBar/>
            </View>
            <View
            style = {HomeStyles.HomeListStyle}
            >
            <FlatList
            showsVerticalScrollIndicator = {false}
            pagingEnabled = {true}
            data = {["1","2","3","4"]}
            onScroll = {({nativeEvent})=>{
                var index = Math.round(nativeEvent.contentOffset.y/height)
                setCurrentIndex(index)
            }}
            keyExtractor = {(item,index)=>item}
            renderItem = {({item,index})=>{
                return(
                    <View
                    style = {HomePropsStyle(height).HomeRenderItemStyle}
                    >
                        {index + 1 & 1 ? 
                        <HomeList
                        onMenuTab = {(index)=>{
                            if (index==0) {
                                props.navigation.navigate(ScreenNames.Profile)
                            }
                        }}
                        /> :
                    <HomeVideoList
                    currentIndex = {currentIndex}
                    index = {index}
                    onMenuTab = {(index)=>{
                        if (index==0) {
                            props.navigation.navigate(ScreenNames.Profile)
                        }
                    }}
                    />
                }
                    </View>
                )
            }}
            />
            </View>
        </View>
    )
}
export default Home