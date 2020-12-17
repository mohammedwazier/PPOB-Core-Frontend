import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Image, View, Text, TextInput } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay';

import VerifSuccess from '../../../public/images/VerifSuccess.png';

const _finishProcess = async () => {
    const hasPin = await hasUserSetPinCode()
    if(hasPin){
        alert('You have successfully set/entered your pin')
    }
}

export default ({ navigation }) => {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', width: '100%', height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'FF000A'
         }}>
                <View style={{
                    marginTop: -100,
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Image style={{
                        width: 100,
                        height: 100,

                    }}
                    resizeMode='contain'
                    source={VerifSuccess}
                    />
                    <Text
                    style={{
                        marginTop: 15,
                        fontWeight:'bold',
                        fontSize: 20
                    }}
                    >Verifikasi Akun telah Berhasil.</Text>

                        {/* <PINCode 
                            status={'choose'} 
                            touchIDDisabled={true} 
                            passwordLength={6}
                            stylePinCodeButtonCircle={{ backgroundColor: '#fff' }}
                            styleLockScreenButton={{ backgroundColor: '#000'}}
                            styleLockScreenMainContainer={{ backgroundColor: '#000' }}
                            subtitleChoose={'Masukkan PIN Anda.'}
                            // colorCircleButtons
                        />  */}

                    <TouchableOpacity style={{
                        padding: 15,
                        width: '70%',
                        // backgroundColor: '#FF0000',
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: '#0A0909',
                        marginTop: 20
                    }}
                    onPress={ () => navigation.dispatch(StackActions.push('RegisterPin'))}
                    >
                        <View>
                            <Text style={{
                                textAlign: 'center',
                            }}>Kirim</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}