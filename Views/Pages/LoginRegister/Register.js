import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Logo from '../../../public/images/NusaLogo.png';
import BackgroundAtas from '../../../public/images/background1.png';
import BackgroundBawah from '../../../public/images/iconlogin.png';
import LoginLogo from '../../../public/images/LoginLogo.png';
import PhoneLogo from '../../../public/images/Phone_Icon.png';
import EmailLogo from '../../../public/images/Email_icon.png';

import Spinner from 'react-native-loading-spinner-overlay';

import { NavigationContainer, StackActions } from '@react-navigation/native'

export default ({ navigation }) => {
    const [TextNumber, setTextNumber] = useState('');
    const [SpinLoad, SetSpinLoad] = useState(false);
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', width: '100%', height: '100%' }}>
            <ImageBackground style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 100,
                height: 100,
                flex: 1,
            }}
            resizeMode={'contain'}
            source={BackgroundAtas}
            />
            <ImageBackground style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 200,
                height: 200,
                flex: 1
            }}
            resizeMode={'contain'}
            source={BackgroundBawah}
            />

            <Spinner
                visible={SpinLoad}
                textContent={'Loading...'}
                textStyle={{ color: '#fff' }}
            />
            <ScrollView style={{
                  marginHorizontal: 30,
                  paddingTop: 50,
			}}>
                <View style={{
                    width: (100% - 30 - 30),
                    position: 'relative',
                    flex: 1,
					flexDirection: 'column',
                    position: 'relative',
                }}>
                    <Image style={{
                        width: 200,
                        height: 100,
                    }}
                    resizeMode='contain'
                    source={Logo} />
                    <View style={{
                        width: '100%',
                        height: 'auto',
                        marginTop: 25,
                    }}>
                        <Text
                        style={{ fontSize:25, fontWeight: '600' }}>Registrasi</Text>
                        <View opacity={0.5} style={{ marginTop:15 }}>
                            <Text>
                                Silahkan masukkan Nomor Handphone Anda.
                            </Text>
                        </View>

                        <View style={{
                            marginTop: 15,
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            borderBottomWidth: 1,
                            borderBottomColor: '#000'
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginTop: 7,
                            }}
                            resizeMode={'contain'}
                            source={LoginLogo} />
                            <TextInput
                            placeholder='Nama Lengkap'
                            placeholderTextColor={'#ccc'}
                            keyboardType='default'
                            onChangeText={text => {
                                text = text.replace(/[^0-9]/g, '')
                                setTextNumber(text)

                            }}
                            value={TextNumber}
                            style={{
                                width: 'auto',
                                marginLeft: 7,
                                padding: 10,
                                color: '#000',
                            }}
                            />
                        </View>

                        <View style={{
                            marginTop: 15,
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            borderBottomWidth: 1,
                            borderBottomColor: '#000'
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginTop: 7,
                            }}
                            resizeMode={'contain'}
                            source={PhoneLogo} />
                            <TextInput
                            placeholder='Nomor Handphone'
                            placeholderTextColor={'#ccc'}
                            keyboardType='numeric'
                            onChangeText={text => {
                                text = text.replace(/[^0-9]/g, '')
                                setTextNumber(text)

                            }}
                            value={TextNumber}
                            style={{
                                width: 'auto',
                                marginLeft: 7,
                                padding: 10,
                                color: '#000',
                            }}
                            />
                        </View>

                        <View style={{
                            marginTop: 15,
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            borderBottomWidth: 1,
                            borderBottomColor: '#000'
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginTop: 7,
                            }}
                            resizeMode={'contain'}
                            source={EmailLogo} />
                            <TextInput
                            placeholder='Email'
                            placeholderTextColor={'#ccc'}
                            keyboardType='email-address'
                            onChangeText={text => {
                                text = text.replace(/[^0-9]/g, '')
                                setTextNumber(text)

                            }}
                            value={TextNumber}
                            style={{
                                width: 'auto',
                                marginLeft: 7,
                                padding: 10,
                                color: '#000',
                            }}
                            />
                        </View>

                        <TouchableOpacity style={{
                            padding: 15,
                            backgroundColor: '#FF0000',
                            borderRadius: 10,
                            marginTop: 15
                        }}
                        onPress={ () => navigation.dispatch(StackActions.push('RegisterVerif'))}
                        >
                            {/* <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}> */}
                            <View>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#fff'
                                }}>Registrasi</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                        opacity={0.8}
                        style={{
                            padding: 15,
                            marginTop: 10
                        }}>
                            <View onPress={ () => navigation.navigate('Login')}>
                                <Text style={{ textAlign:'center', fontSize: 12 }}>Sudah punya Akun? Klik disini untuk Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}