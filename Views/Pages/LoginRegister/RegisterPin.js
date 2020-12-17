import React from 'react';
import { SafeAreaView, TouchableOpacity, Image, View, Text, TextInput } from 'react-native';

import LogoWhite from '../../../public/images/NusaLogoWhite.png';

export default ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: getHeaderTitle(route)
            headerShown: false,
            gestureEnabled: false
        });
      }, [navigation, route]);
    
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', width: '100%', height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'FF000A'
         }}>
             <View style={{
                 marginRight: 40,
                 marginLeft: 40,
                 backgroundColor: '#ccc',
                 flex: 1
            }}>
                <Image source={LogoWhite}
                style={{
                    marginTop: 50,
                    width: '100%',
                    height: 50,
                    // borderColor: '#000',
                    // borderWidth: 1
                }}
                resizeMode='contain'
                />
                <Text style={{
                    color: '#FFF',
                    textAlign: 'center',
                    marginTop: 10,
                }}>Masukkan PIN Anda</Text>

                <View style={{
                    marginTop: 25,
                    marginRight: 50,
                    marginLeft: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {[...Array(6).keys()].map((d, key) => {
                        return(
                            <View
                            key={key}
                            style={{
                                width: 13,
                                height: 13,
                                borderRadius: 13,
                                borderWidth: 1,
                                borderColor: '#000',
                                // backgroundColor: '#000'
                            }} />
                        )
                    })}
                </View>

             </View>
         </SafeAreaView>
    )
}