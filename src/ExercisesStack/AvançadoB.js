import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';

class AvançadoB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AvançadoB: [
                { id: '1', treino: 'Remada Cavalinho' },
                { id: '2', treino: 'Puxada Alta' },
                { id: '3', treino: 'Remada na Polia Baixa' },
                { id: '4', treino: 'Remada Máquina Neutra' },
                { id: '5', treino: 'Voador Inverso' },
                { id: '6', treino: 'Encolhimento com Alteres' },
                { id: '7', treino: 'Rosca Direta W' },
                { id: '8', treino: 'Rosca Polia' },
            ]
        }
    }

    startWorkout = () => {
        const { navigation } = this.props;
        navigation.navigate("Workout", {
            treinoData: this.state.AvançadoB
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.AvançadoB}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.treino}</Text>
                        </View>
                    )}
                />
                <TouchableOpacity
                    style={styles.containerButton}
                    onPress={this.startWorkout}>
                    <Text
                        style={styles.startButton}
                    >
                        Começar Treino
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
    },

    title: {
        color: '#EA580C'
    },

    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFE3CA',
        padding: 10,
        height: 40,
        margin: 10,
        backgroundColor: '#FFF8E3'
    },

    containerList: {
        height: '90%'
    },

    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },

    startButton: {
        textAlign: 'center',
        color: '#5C5470',
        backgroundColor: '#B9B4C7',
        width: '40%',
        height: '40%',
        padding: 5,
        borderRadius: 10,
        fontSize: 14,
        fontWeight: '800'
    },
});

export default AvançadoB;