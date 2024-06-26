import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [modalVisibleName, setModalVisibleName] = useState(false);
  const [modalVisibleAltura, setModalVisibleAltura] = useState(false);
  const [modalVisiblePeso, setModalVisiblePeso] = useState(false);

  useEffect(() => {
    // Recuperar dados ao iniciar o componente
    retrieveData();
    retrieveAltura();
    retrievePeso();
  }, []); // Executado apenas uma vez no montante do componente

  const saveData = async (key, value, stateSetter, modalSetter) => {
    try {
      // Salvar dados no AsyncStorage
      await AsyncStorage.setItem(key, value);
      stateSetter(value);
      modalSetter(false);
    } catch (error) {
      console.error(`Erro ao salvar ${key}:`, error);
    }
  };

  const retrieveData = async () => {
    try {
      // Recuperar o nome do AsyncStorage ao iniciar o componente
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName !== null) {
        setName(storedName);
      }
    } catch (error) {
      console.error('Erro ao recuperar nome:', error);
    }
  };

  const retrieveAltura = async () => {
    try {
      // Recuperar a Altura do AsyncStorage ao iniciar o componente
      const storedAltura = await AsyncStorage.getItem('alturaUsuario');
      if (storedAltura !== null) {
        setAltura(storedAltura);
      }
    } catch (error) {
      console.error('Erro ao recuperar altura:', error);
    }
  };

  const retrievePeso = async () => {
    try {
      // Recuperar o Peso do AsyncStorage ao iniciar o componente
      const storedPeso = await AsyncStorage.getItem('pesoUsuario');
      if (storedPeso !== null) {
        setPeso(storedPeso);
      }
    } catch (error) {
      console.error('Erro ao recuperar peso:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Gerais</Text>
      <View style={styles.separator} />
      <Text style={styles.subTitle}>Pessoais: </Text>

      {/* NOME */}
      <View style={styles.info}>
        <View style={styles.infos}>
          <Ionicons name={'newspaper'} size={24} color={'#5C5470'} />
          <Text style={styles.infosText}>Nome: </Text>
        </View>

        <View style={styles.list}>
          <Text
            style={styles.infoText}
            onPress={() => setModalVisibleName(true)}
          >
            {name || 'Inserir Nome'}
          </Text>
        </View>
      </View>

      <Modal visible={modalVisibleName} transparent>
        <View style={styles.modal}>
          <TextInput
            placeholder="Digite seu nome"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.modalContent}
          />
          <Button
            title="Salvar"
            onPress={() => saveData('userName', name, setName, setModalVisibleName)}
          />
        </View>
      </Modal>

      <View style={styles.separatorList} />

      {/* ALTURA */}
      <View style={styles.info}>
        <View style={styles.infos}>
          <Ionicons name={'man'} size={24} color={'#5C5470'} />
          <Text style={styles.infosText}>Altura: </Text>
        </View>
        <View style={styles.list}>
          <Text
            style={styles.infoText}
            onPress={() => setModalVisibleAltura(true)}
          >
            {altura || 'Inserir Altura'}
          </Text>
        </View>
      </View>

      <Modal visible={modalVisibleAltura} transparent>
        <View style={styles.modal}>
          <TextInput
            placeholder="Digite sua altura"
            value={altura}
            onChangeText={(text) => setAltura(text)}
            style={styles.modalContent}
          />
          <Button
            title="Salvar"
            onPress={() => saveData('alturaUsuario', altura, setAltura, setModalVisibleAltura)}
          />
        </View>
      </Modal>

      <View style={styles.separatorList} />

      {/* PESO */}
      <View style={styles.info}>
        <View style={styles.infos}>
          <Ionicons name={'scale'} size={24} color={'#5C5470'} />
          <Text style={styles.infosText}>Peso: </Text>
        </View>
        <View style={styles.list}>
          <Text
            style={styles.infoText}
            onPress={() => setModalVisiblePeso(true)}
          >
            {peso || 'Inserir Peso'}
          </Text>
        </View>
      </View>

      <Modal visible={modalVisiblePeso} transparent>
        <View style={styles.modal}>
          <TextInput
            placeholder="Peso em KG"
            value={peso}
            onChangeText={(text) => setPeso(text)}
            style={styles.modalContent}
          />
          <Button
            title="Salvar"
            onPress={() => saveData('pesoUsuario', peso, setPeso, setModalVisiblePeso)}
            style={styles.modalButton}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#FAF0E6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#352F44',
    paddingVertical: 10,
  },

  subTitle: {
    marginBottom: 10,
    color: '#352F44',
  },

  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center'
  },

  separatorList: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.2
  },

  info: {
    width: 'auto',
    height: 'auto',
    padding: 10,
    flexDirection: 'row',
    textAlign: 'center'
  },

  infos: {
    flexDirection: 'row',
    width: '22%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  list: {
    width: '70%',
    alignItems: 'flex-end'
  },

  infoText: {
    lineHeight: 24,
    marginLeft: 10,
    justifyContent: 'flex-end',
    color: '#EA580C'
  },

  infosText: {
    color: '#EA580C'
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 6
  },  

});