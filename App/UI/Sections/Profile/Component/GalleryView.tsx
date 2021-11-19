import React from "react";
import {View,FlatList} from "react-native"
import { AppStyle } from "../../../Utils/AppStyles";
import { dummyGalleryImages } from "../Utils/Constant";
import SingleGalleryItem from "../Component/SingleGalleryItem"
const GalleryView = () =>{
    return(
        <View
        style = {AppStyle.MainViewStyle}
        >
            <FlatList
            data = {dummyGalleryImages}
            showsVerticalScrollIndicator = {false}
            keyExtractor = {(item,index)=>item}
            renderItem = {({item,index})=>{
                return(
                        <SingleGalleryItem
                    image = {item}
                    index = {index}
                    />
                )
            }}
            numColumns = {2}
            />
        </View>
    )
}
export default GalleryView