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
import styles from './styles';

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
                                source={require('../../../assets/rosto.png')}
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
                            source={require('../../../assets/calendar-2.png')}
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
                                source={require('../../../assets/rosto-2.png')}
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
                            source={require('../../../assets/calendar-2.png')}
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


export default Agendar