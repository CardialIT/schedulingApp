import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Exercises = () => {
    const navigation = useNavigation()

    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.list}>
                <Text
                    style={styles.infosText}
                    onPress={() => navigation.navigate("Iniciante")
                    }>
                    Treino Iniciante
                </Text>
                <Text
                    style={styles.infosText}
                    onPress={() => navigation.navigate("Intermediário")
                    }>
                    Treino Intermediário
                </Text>
                <Text
                    style={styles.infosText}
                    onPress={() => navigation.navigate("Avançado")
                    }>
                    Treino Avançado
                </Text>
            </View>
        </ScrollView>
    )
}

export default Exercises

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#F6F5F5',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    infosText: {
        color: '#EA580C',
        backgroundColor: '#FFE3CA',
        width: '80%',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 2,
    },

    list: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
});