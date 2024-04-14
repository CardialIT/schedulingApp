import {
    View,
    Text
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Checkout</Text>
        </View>
    )
}

export default Checkout