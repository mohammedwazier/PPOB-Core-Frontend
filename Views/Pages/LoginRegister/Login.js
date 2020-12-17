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
                        style={{ fontSize:25, fontWeight: '600' }}>Login</Text>
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
                            padding: 15,
                            backgroundColor: '#FF0000',
                            borderRadius: 10,
                            marginTop: 15
                        }}>
                            <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#fff'
                                }}>Masuk</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            padding: 15,
                            backgroundColor: '#ecf0f1',
                            borderRadius: 10,
                            marginTop: 15
                        }}>
                            <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#000'
                                }}>Masuk Menggunakan Akun Google</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            padding: 15,
                            backgroundColor: '#3498db',
                            borderRadius: 10,
                            marginTop: 15
                        }}>
                            <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#fff'
                                }}>Masuk Menggunakan Akun Facebook</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            padding: 15,
                            backgroundColor: '#2c3e50',
                            borderRadius: 10,
                            marginTop: 15
                        }}>
                            <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#fff'
                                }}>Masuk Menggunakan Akun Apple</Text>
                            </TouchableOpacity>
                        </View>

                        <View
                        opacity={0.8}
                        style={{
                            padding: 15,
                            marginTop: 10
                        }}>
                            <TouchableOpacity onPress={ () => navigation.dispatch(StackActions.push('Register'))}>
                                <Text style={{ textAlign:'center', fontSize: 12 }}>Belum Punya Akun? Klik disini untuk Registrasi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}