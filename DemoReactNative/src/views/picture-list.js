import React, { Component, useState, useEffect, useRef } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default PictureList = () => {
    const [imageList, setImageList] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const stepCarousel = useRef(null);
    useEffect (() => {
        //1. Load data từ server
        const data = [
            {
                image: <Image source={require('../images/img1.jpg')} resizeMode="stretch" style={{ width: screenWidth, height: '100%' }} />,
                type: 'png',
                camera: 'Sony'
            },
            {
                image: <Image source={require('../images/img2.jpg')} resizeMode="stretch" style={{ width: screenWidth, height: '100%' }} />,
                type: 'png',
                camera: 'Iphone'
            },
            {
                image: <Image source={require('../images/img3.jpg')} resizeMode="stretch" style={{ width: screenWidth, height: '100%' }} />,
                type: 'png',
                camera: 'Samsung'
            },
            {
                image: <Image source={require('../images/img4.jpg')} resizeMode="stretch" style={{ width: screenWidth, height: '100%' }} />,
                type: 'png',
                camera: 'LG'
            }
        ];

        //2. Cap nhat len state cua screen
        setImageList(data);
    }, [])

    useEffect(() => {
        if(imageList.length > 0) {
            let index = 0;
            setInterval(() => {
                stepCarousel.current.scrollTo({ x: index * screenWidth, y: 0, animated: true });
                index += 1;
                if(index === imageList.length) {
                    index = 0;
                }
            }, 3000);
        }
    }, [imageList])

    const handleScroll = (e) => {
        if(!e) {
            return;
        }
        const { nativeEvent } = e;
        if (nativeEvent && nativeEvent.contentOffset) {
            const currentOffset = nativeEvent.contentOffset.x;
            let imageIndex = 0;
            if (nativeEvent.contentOffset.x > 0) {
                imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
            }
            setCurrentImage(imageIndex);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Picture List</Text>
                {/* ScrollView */}
                <View style={{ width: screenWidth, height: 200 }}>
                    <ScrollView
                        horizontal
                        // pagingEnabled
                        contentContainerStyle={{ width: screenWidth * imageList.length, height: 200 }}
                        scrollEventThrottle={16}
                        onScroll={handleScroll}
                        ref={stepCarousel}
                    >
                        {imageList.map((e, index) =>
                            <View key={index.toString()}>
                                {e.image}
                            </View>
                        )}
                    </ScrollView>
                </View>

                {/* Hiển thị thông tin */}
                <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Index: {currentImage}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Type: {imageList[currentImage]? imageList[currentImage].type: ""}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Camera: {imageList[currentImage]? imageList[currentImage].camera: ""}
                </Text>
            </View>
        </SafeAreaView>
    )
}