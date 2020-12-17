import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView, View, Text, TextInput } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native'
import Spinner from 'react-native-loading-spinner-overlay';

export default ({ navigation }) => {
    const [SpinLoad, SetSpinLoad] = useState(false);
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', width: '100%', height: '100%' }}>

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
                    alignItems: 'center',
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <Text style={{ fontWeight:'bold', fontSize: 20 }}>asdasdadas</Text>
                    <Text style={{ textAlign:'center', marginTop: 15 }}>Anda akan menerima Kode OTP konfirmasi pada Email:
                        <Text style={{ fontWeight:'bold' }}>dummy@dummy.com</Text>, silahkan cek halaman Inbox/Spam di Email Anda.
                    </Text>

                    <View
                    style={{ 
                        marginTop: 15,
                        flex: 1,
                        flexDirection: 'row',
                        width: '60%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#000'
                     }}
                    >
                        <TextInput
                        placeholder='Nama Lengkap'
                        placeholderTextColor={'#ccc'}
                        keyboardType='default'
                        onChangeText={text => {
                            text = text.replace(/[^0-9]/g, '')
                            // setTextNumber(text)

                        }}
                        // value={TextNumber}
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            padding: 10,
                            color: '#000',
                        }}
                        />
                    </View>

                    <TouchableOpacity style={{
                        padding: 15,
                        width: '80%',
                        backgroundColor: '#FF0000',
                        borderRadius: 10,
                        marginTop: 15
                    }}
                    onPress={ () => navigation.dispatch(StackActions.push('RegisterVerifSuccess'))}
                    >
                        {/* <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}> */}
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                color: '#fff'
                            }}>Kirim</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop:15, }}>
                        <Text style={{ textAlign: 'center' }}>Anda akan menerima Kode dalam
                            <Text style={{ color: '#F01414' }}>
                                <Text> 30</Text>s
                            </Text>
                        </Text>
                        <View style={{ flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center'
                        }}>
                            <Text>Belum menerima Kode? </Text>
                            <View opacity={0.5}>
                                <TouchableOpacity onPress={ () => SetSpinLoad(!SpinLoad)}>
                                <Text>Kirim Ulang.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>
    );
}