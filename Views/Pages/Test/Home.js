import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ history }) => {
    return(
        <View>
            <Text style={{ color: '#FFF' }}>This is the Home Page</Text>
            <Button title="Change Page" onPress={() => history.push('product')} />
        </View>
    )
}