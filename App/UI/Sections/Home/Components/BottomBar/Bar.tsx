import React from "react"
import {View,Text,Image} from "react-native"
import { HomeStyles } from "../../Styles/HomeStyles"
interface BarProps {
    data : any
}
const Bar = ({data} : BarProps) => {
    return(
        <View
        style = {HomeStyles.BarStyle}
        >
            <Image
            source = {data}
            />

        </View>
    )
}
export default Bar