import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Agendar = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Barba</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Corte Degrade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cortes</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.backgroundContainer}>
                    <View style={styles.secondContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/rosto.png')}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Fernando Andrade</Text>
                            <Text style={styles.textWork}>Barbeiro</Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.agenda}>
                        <Image
                            style={styles.calendarImage}
                            source={require('../../assets/calendar-2.png')}
                        />
                        <Text
                            style={styles.calendarText}
                        >
                            Disponível para agendamento
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text
                            style={styles.buttonText}
                            onPress={() => navigation.navigate("Checkout")}
                            >Agendar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.backgroundContainer}>
                    <View style={styles.secondContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/rosto-2.png')}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Gilberto Farias</Text>
                            <Text style={styles.textWork}>Barbeiro</Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.agenda}>
                        <Image
                            style={styles.calendarImage}
                            source={require('../../assets/calendar-2.png')}
                        />
                        <Text
                            style={styles.calendarText}
                        >
                            Disponível para agendamento
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Agendar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        flex: 1,
        marginTop: 30
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        paddingVertical: 10,
        paddingHorizontal: 4
    },

    button: {
        backgroundColor: '#E1F1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 6,
    },

    buttonText: {
        color: '#DD3E7B',
        fontWeight: 'bold',
        fontSize: 14
    },

    secondContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
    },

    imageContainer: {
        marginRight: 20,
    },

    backgroundContainer: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 10
    },

    textName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    textWork: {
        color: 'gray'
    },

    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginHorizontal: 20,
        marginTop: 20,
    },

    agenda: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'start',
        alignItems: 'center',
    },

    calendarImage: {
        marginRight: 10
    },

    calendarText: {
        color: 'gray'
    }
})

export default Agendar