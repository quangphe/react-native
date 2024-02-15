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
const SIGN_IN = 'SIGN_IN';
const GET_STARTED = 'GET_STARTED';

export default function Login({navigation}) {
    const [page, setPage] = useState(SIGN_IN);

    return (
        <View style={{ width: '100%', height: '100%'}}>
            <View style={{ height: '25%', width: '100%' }}>
                <RedComponent page={page} setPage={setPage} />
            </View>
            <View style={{ height: '45%', width: '100%', backgroundColor: '#f5f5f5' }}>
                <GreenComponent />
            </View>
            <View style={{ flex: 1 }}>
                <BlueComponent />
            </View>
        </View>
    )
}

const BlueComponent = () => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40, width: windowWidth - 60, marginLeft: 30 }}>
                <View style={{ height: 1, width: '30%', backgroundColor: '#707070' }}></View>
                <Text>  or connect width  </Text>
                <View style={{ height: 1, width: '30%', backgroundColor: '#707070' }}></View>
            </View>
        </View>
    )
}

const GreenComponent = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwHidden, setPwHidden] = useState(true);
    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, marginLeft: 30 }}>
                Login in your account
            </Text>
            {/* Email */}
            <View style={{ width: windowWidth - 60, height: 45, marginTop: 20, marginLeft: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../images/email.png')} resizeMode="stretch" style={{ width: 20, height: 20, marginLeft: 10 }} />
                <TextInput style={{ height: '100%', flex: 1, marginLeft: 10, fontSize: 20 }} autoCapitalize={false} placeholder="Email" />
            </View>

            {/* Password */}
            <View style={{ width: windowWidth - 60, height: 45, marginTop: 20, marginLeft: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../images/lock.png')} resizeMode="stretch" style={{ width: 20, height: 20, marginLeft: 10 }} />
                <TextInput style={{ height: '100%', flex: 1, marginLeft: 10, fontSize: 20 }} autoCapitalize={false} placeholder="Password" />
                <TouchableOpacity>
                    <Image source={require('../images/eyes.png')} resizeMode="stretch" style={{ width: 20, height: 20, marginLeft: 10, marginRight: 10 }} />
                </TouchableOpacity>
            </View>

            {/* Forget password */}
            <View style={{ width: windowWidth - 60, height: 20, marginTop: 20, marginLeft: 30, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ color: '#707070' }}>
                        Forget password ?
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Button Login */}
            <TouchableOpacity style={{ height: 45, width: windowWidth - 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4D8D6E', marginLeft: 30, marginTop: 10, borderRadius: 100 }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const RedComponent = ({ page, setPage }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ width: '100%', flex: 1, backgroundColor: '#4D8D6E', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 50, fontWeight: '600', color: '#fff' }}>
                        wasty.
                    </Text>
                    <Text style={{ color: '#fff' }}>
                        think for nature
                    </Text>
                </View>
                <View style={{ height: 50, flexDirection: 'row', backgroundColor: '#fff' }}>
                    <TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => {setPage(SIGN_IN)}} disabled={page === SIGN_IN ? true : false}>
                        <Text style={{ fontSize: 20, color: '#4D8D6E' }}>Sign in</Text>
                        {page === SIGN_IN ? <View style={{ position: 'absolute', bottom: 0, height: 3, width: '100%', backgroundColor: '#4D8D6E' }}></View> : null}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => {setPage(GET_STARTED)}} disabled={page === GET_STARTED ? true : false}>
                        <Text style={{ fontSize: 20, color: '#4D8D6E' }}>Get started</Text>
                        {page === GET_STARTED ? <View style={{ position: 'absolute', bottom: 0, height: 3, width: '100%', backgroundColor: '#4D8D6E' }}></View> : null}
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    )
}