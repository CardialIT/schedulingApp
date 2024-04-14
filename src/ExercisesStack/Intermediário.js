import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Intermediário = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.infosText}
                onPress={() => navigation.navigate("IntermediárioA")}>
                <Text
                    style={styles.infosButton}>
                    Intermediário A
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.infosText}
                onPress={() => navigation.navigate("IntermediárioB")}>
                <Text
                    style={styles.infosButton}>
                    Intermediário B
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.infosText}
                onPress={() => navigation.navigate("IntermediárioC")}>
                <Text
                    style={styles.infosButton}>
                    Intermediário C
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
        padding: 4,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    infosText: {
        backgroundColor: '#FFE3CA',
        width: '60%',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 4,
        width: '100%'
    },

    infosButton: {
        textAlign: 'center',
        color: '#EA580C'
    }
});

export default Intermediário