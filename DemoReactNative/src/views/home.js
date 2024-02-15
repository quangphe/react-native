import React, { Component, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../redux/actions/updateAction';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CallAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: "Data"})
            console.log("Trả về data");
        }, 3000);
    })
}

const getData = async (setData) => {
    let data = await CallAPI()
    setData(data);
}

export default function Home({route, navigation}) {
    const [value, setValue] = useState(1);
    const [data, setData] = useState({data: null});
    const [email, onChangeEmail] = React.useState("");
    const info = useSelector((state) => state.personalInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Mới vào màn hình")
        getData(setData)
        return () => {
            console.log("Hủy màn hình này")
        }
    }, [])

    useEffect(() => {
        console.log("Data đã lắng nghe là: ", data);
    }, [data])

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
                            HOME
                        </Text>
                        <Text>Email: {info.email}</Text>
                        <Text>Score: {info.score}</Text>
                        <Text>Address: {info.address}</Text>
                        <Text>Id: {info.id}</Text>
                        {/* <Text style={{fontSize: 60, marginBottom: 50, height: '50%'}}>
                            {value}
                        </Text>
                        <TouchableOpacity style={{ marginTop: 20, width: '60%', height: '30%', borderColor: 'white', borderWidth: 1, borderRadius: 100, backgroundColor: '#4D3389', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 20 }} 
                            onPress={() => {
                                let newValue = value + 1;
                                setValue(newValue);
                            }}>
                                Đếm số
                            </Text>
                        </TouchableOpacity> */}

                        <TextInput 
                            style={{height: 40, width: '90%', margin: 12, borderWidth: 1, padding: 10}}
                            autoCapitalize="none"
                            onChangeText={onChangeEmail}
                            value={email}
                        />
                        <TouchableOpacity
                            style={{width: 200, height: 40, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: "center"}}
                            onPress={ () => dispatch(updateEmail(email)) }
                        >
                            <Text>
                                Cập nhật
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}