import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions,
    TextInput,
    Image
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({route, navigation}) {
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} >
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: '100%', width: '100%' }}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <Text style={{ padding: 10 }}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: '20%', marginTop: 0.3 * windowHeight, alignItems: 'center' }}>                      
                        <Text style={{ color: '#000', textAlign: 'center', fontSize: 30 }}>
                            PRODUCT
                        </Text>
                        <TouchableOpacity style={{ marginTop: 20, width: '60%', height: '30%', borderColor: 'white', borderWidth: 1, borderRadius: 100, backgroundColor: '#4D3389', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 20 }} 
                            onPress={() => {
                                navigation.popToTop();
                            }}>
                                Đăng xuất
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}