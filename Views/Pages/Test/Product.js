import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ history }) => {
    return(
        <View>
            <Text style={{ color: '#FFF' }}>This is the Product Page 1</Text>
            <Text style={{ color: '#FFF' }}>This is the Product Page 2</Text>
            <Text style={{ color: '#FFF' }}>This is the Product Page 3</Text>
            <Text style={{ color: '#FFF' }}>This is the Product Page 4</Text>
            <Button title="Change Page" onPress={() => history.push('/home')} />
        </View>
    )
}