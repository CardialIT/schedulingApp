import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';

class IntermediarioA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IntermediarioA: [
                { id: '1', treino: 'Supino Plano' },
                { id: '2', treino: 'Supino Inclinado com Alteres' },
                { id: '3', treino: 'Voador' },
                { id: '4', treino: 'Desenvolvimento Costas Smith' },
                { id: '5', treino: 'Elevação Lateral' },
                { id: '6', treino: 'Tríceps Testa W' },
                { id: '7', treino: 'Tríceps Puxador Corda' },
                { id: '8', treino: 'Panturrilhas em Pé Livre' },
            ]
        }
    }

    startWorkout = () => {
        const { navigation } = this.props;
        navigation.navigate("Workout", {
            treinoData: this.state.IntermediarioA
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.IntermediarioA}
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

    treinos: {
        width: '60%',
    },

    treino: {
        width: '100%',
        backgroundColor: 'red'
    },
    containerList: {
        height: '100%',
    },

    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
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

export default IntermediarioA;
