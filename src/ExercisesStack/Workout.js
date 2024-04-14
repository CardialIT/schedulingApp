import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    // TextInput,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Button,
    FlatList
} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';



const Workout = () => {
    const [timerStart, setTimerStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [customTime, setCustomTime] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedOption, setSelectedOption] = useState('option2');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [externalFlatListData, setExternalFlatListData] = useState([]);


    const optionsLabel = [
        { label: 'Opção 1', value: 'option1' },
        { label: 'Opção 2', value: 'option2' },
        { label: 'Opção 3', value: 'option3' },
    ];

    const route = useRoute();

    useEffect(() => {
        const { treinoData } = route.params;

        // Atualiza o estado com os dados
        setExternalFlatListData(treinoData);
    }, [route]);

    const toggleTimer = () => {
        setTimerStart(!timerStart);
        setTimerReset(false);
    };

    const resetTimer = () => {
        setTimerStart(false);
        setTimerReset(true);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleListItemPress = (item) => {
        setCustomTime('');
        setSelectedTime(item);
    };

    const getFormattedTime = (time) => {
        const minutes = Math.floor(time.minutes);
        const seconds = Math.floor(time.seconds);

        console.log(`${minutes}:${seconds}`);
    };

    // Lista de tempos pré-definidos
    const predefinedTimes = [
        { id: '1', label: '15 sec', time: 15000 },
        { id: '2', label: '30 sec', time: 30000 },
        { id: '3', label: '60 sec', time: 60000 },
        { id: '4', label: '1min30s', time: 90000 },
        { id: '5', label: '2 min', time: 120000 },
        { id: '6', label: '2min30s', time: 150000 },
        { id: '7', label: '3 min', time: 180000 },
        { id: '8', label: '3min30s', time: 210000 },
        { id: '9', label: '4 min', time: 240000 },
        { id: '10', label: '1', time: 1000 },
    ];

    const handleOnChangeWeight = (text) => {
        setWeight(text)
    };
    console.log(weight)

    const handleOnChangeReps = (text) => {
        setReps(text)
    };
    console.log(reps)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Ícone para abrir o modal */}
                <TouchableOpacity
                    onPress={openModal}
                    style={styles.modalTimer}>
                    <Ionicons name="timer-outline" size={50} color="black" />
                </TouchableOpacity>

                {/* Timer */}
                <TouchableOpacity
                    onPress={toggleTimer}
                    style={[
                        styles.timerContainer,
                        timerStart && styles.timerActive,
                    ]}>
                    <Timer
                        totalDuration={selectedTime ? selectedTime.time : 60000}
                        msecs={false}
                        start={timerStart}
                        reset={timerReset}
                        options={options}
                        handleFinish={() => alert('Acabou o descanso')}
                        getTime={getFormattedTime}
                        UNSAFE_componentWillReceiveProps={() => { }}
                    />
                </TouchableOpacity>

                {/* Botão de controle para o Timer */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={resetTimer} style={styles.button}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Modal para configurar o tempo */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={{ fontSize: 24, marginBottom: 10, color: '#FAF0E6' }}>Escolha um tempo para o descanso:</Text>

                    {/* Lista de tempos pré-definidos */}
                    <FlatList
                        style={styles.flatList}
                        data={predefinedTimes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.listItem,
                                    selectedTime && selectedTime.id === item.id && styles.selectedListItem,
                                ]}
                                onPress={() => handleListItemPress(item)}
                            >
                                <Text style={styles.listItemText}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <Button title="Fechar" onPress={closeModal} style={styles.buttonClose} />
                </View>
            </Modal>

            <View style={styles.separator} />
            {/* <View style={styles.workoutInputs}>
                <TextInput
                    style={styles.input}
                    placeholder="Repetições"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={handleOnChangeWeight}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Peso em kg"
                    keyboardType="numeric"
                    value={reps}
                    onChangeText={handleOnChangeReps}
                />
            </View> */}

            {/* Lista de treinos */}
            <View style={styles.externalFlatListView}>
                <FlatList
                    style={styles.workoutList}
                    data={externalFlatListData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        selectedTime && selectedTime.id === item.id ? (
                            <TouchableOpacity
                                style={[
                                    styles.listItem,
                                    selectedTime && selectedTime.id === item.id && styles.selectedListItem,
                                ]}
                                onPress={() => handleListItemPress(item)}
                            >
                                <Text style={styles.listItemText}>{item.treino}</Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.listItem}>
                                <Text style={styles.listItemText}>{item.treino}</Text>
                            </View>
                        )
                    )}
                />
            </View>

            {/* BOTÃO SALVAR TREINO */}
            {/* <View style={styles.saveWorkout}>
                <TouchableOpacity tyle={styles.buttonSaveWorkout}>
                    <Text>Salvar treino</Text>
                </TouchableOpacity>
            </View> */}


        </View>
    );
};

const options = {
    container: {
        backgroundColor: '#EA580C',
        padding: 5,
        borderRadius: 5,
        width: 142,
    },
    text: {
        fontSize: 30,
        color: '#fff7ed',
        marginLeft: 7,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff7ed',
        paddingHorizontal: 4,
        paddingVertical: 8,
        alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    modalTimer: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginHorizontal: 5,
        borderRadius: 5,
        width: 82,
    },

    modalContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    buttonContainer: {
        height: 50,
        marginLeft: 6
    },

    button: {
        color: '',
        backgroundColor: 'transparent',
        borderRadius: 5,
        width: 82,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#7c2d12',
        fontSize: 16,
    },

    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    selectedListItem: {
        backgroundColor: '#B9B4C7',
        width: 'auto',
        borderRadius: 20,
    },

    timerContainer: {
        padding: 0,
        height: 50,
    },

    timerActive: {
        backgroundColor: 'red',
    },

    listItemText: {
        fontSize: 16,
        height: 30,
    },

    flatList: {
        width: 100,
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: '#FAF0E6',
        maxHeight: 400,
        marginBottom: 20,
    },

    // workoutInputs: {
    //     borderColor: '#352F44',
    //     flexDirection: 'row',
    //     marginHorizontal: 44,
    //     paddingVertical: 4,
    // },

    // input: {
    //     flex: 1,
    //     borderWidth: 1,
    //     borderColor: '#352F44',
    //     padding: 1,
    //     margin: 2,
    //     textAlign: 'center',
    //     alignContent: 'center',
    //     justifyContent: 'center'
    // },

    externalFlatListView: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 10
    },

    workoutList: {
        margin: 0,
        padding: 0,
        width: '100%'
    },
    
    // saveWorkout: {
    //     marginTop: 10,
    //     marginBottom: 10,
    //     height: 'auto',
    //     backgroundColor: '#EA580C',
    //     padding: 10,
    //     borderRadius: 20
    // },

    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        width: '98%',
        alignItems: 'center'
      },

});

export default Workout;