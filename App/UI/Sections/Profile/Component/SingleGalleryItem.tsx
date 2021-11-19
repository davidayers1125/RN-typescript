import React from "react"
import {View,Text,ImageBackground,TouchableWithoutFeedback, Image} from "react-native"
import { AppStyle, screenWidth } from "../../../Utils/AppStyles"
import { ProfileImages } from "../Utils/Constant"
import { ProfilePropsStyle, ProfileStyles } from "../Utils/ProfileStyle"
interface singleItemProps {
    image : any,
    index : number
}
const SingleGalleryItem = ({image,index} : singleItemProps) =>{
    return(
        <TouchableWithoutFeedback>
            <ImageBackground
            resizeMode = "cover"
            source = {image}
            style = {ProfilePropsStyle(index).ProfileGalleryImageStyle}
            >
                <Image
                source = {ProfileImages.play}
                />
                <Text
                style = {ProfileStyles.GalleryViewsStyle}
                >
                4.6M
                </Text>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}
export default SingleGalleryItem