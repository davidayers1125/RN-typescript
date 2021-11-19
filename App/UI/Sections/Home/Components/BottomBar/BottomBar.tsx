import React from "react"
import {View,Text,SafeAreaView} from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { HomeStyles } from "../../Styles/HomeStyles"
import { BarItems } from "../../Utils/Constants"
import Bar from "./Bar"
interface BottomBarProps {
    onClick : (index : number)=>void
}
const BottomBar = ({onClick} : BottomBarProps) => {
    return (
        <View
        style = {HomeStyles.BottomBarMainStyle}
        >
            <View
            style = {HomeStyles.BottomBarStyle}
            >
                {
                    BarItems.map((item,index)=>{
                        return(
                            <View
                            key = {index}
                            >
                                <TouchableWithoutFeedback
                                onPress = {()=>onClick(index)}
                                >
                                    <Bar
                                    data = {item}
                                    />
                                    </TouchableWithoutFeedback> 
                            </View>
                        )
                    })
                }
            </View>
            <SafeAreaView
            style = {{
                backgroundColor : "transparent"
            }}
            />
        </View>
    )
}
export default BottomBar