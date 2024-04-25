import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icon from '../../assets/icone.png'; 
import styles from './styles';

const Checkout = () => {
  const navigation = useNavigation()
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  // Array com os nomes dos meses do ano
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Array com os nomes dos dias da semana
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Array com todos os dias do mês selecionado
  const getDaysInMonth = () => {
    const year = new Date().getFullYear();
    const month = currentMonthIndex + 1; // Adiciona 1 pois o mês começa do zero
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => ({ id: `${i + 1}`, date: `${(i + 1).toString().padStart(2, '0')}`, dayOfWeek: daysOfWeek[new Date(year, month - 1, i + 1).getDay()], isSelected: false }));
  };

  const dates = getDaysInMonth();

  const times = [
    { id: '1', time: '09:00 AM' }, // Exemplo de horários
    { id: '2', time: '10:00 AM' },
    { id: '3', time: '11:00 AM' },
    { id: '4', time: '12:00 PM' },
    { id: '5', time: '01:00 PM' },
    { id: '6', time: '10:00 PM' },
    // Adicione mais horários conforme necessário
  ];

  const renderDateItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedDate(item.date)}>
        <View style={[styles.dateItemContainer,{ borderColor: selectedDate === item.date ? '#FF27A2' : '#7A7A7A'}]}>
          <Text style={[styles.dateText,{ color: selectedDate === item.date ? '#FF27A2' : '#7A7A7A' }]}>{item.date}</Text>
          <Text style={[styles.dayOfWeekText, { marginTop: selectedDate === item.date ? 4 : 15 },{ color: selectedDate === item.date ? '#FF27A2' : '#7A7A7A' }]}>{item.dayOfWeek}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedTime(item.time)}>
      <View style={[styles.timeItemContainer, { borderColor: selectedTime === item.time ? '#FF27A2' : '#7A7A7A' }]}>
        <Text style={[styles.timeText, { color: selectedTime === item.time ? '#FF27A2' : '#7A7A7A' }]}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  const changeMonth = (direction) => {
    if (direction === 'next') {
      setCurrentMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
    } else {
      setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
    }
  };

  return (
    <View style={styles.container}>
      {/* Foto, nome e profissão */}
      <View style={styles.profileContainer}>
        <Image
          source={icon} // Usar a imagem importada aqui
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>Fernando Andrade</Text>
        <Text style={styles.professionText}>Barbeiro</Text>
      </View>
      <View style={styles.divider} />

      {/* Seleção do Dia */}
      <ScrollView>
        <View style={styles.selectionTitleContainer}>
          <Text style={styles.selectionTitleText}>Selecionar o dia e hora</Text>
        </View>

        {/* Navegação de mês e seleção do dia */}
        <View style={styles.monthNavigationContainer}>
          <TouchableOpacity onPress={() => changeMonth('previous')}>
            <Text style={styles.navigationText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.monthText}>{months[currentMonthIndex]}</Text>
          <TouchableOpacity onPress={() => changeMonth('next')}>
            <Text style={styles.navigationText}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Data */}
        <View style={styles.datesContainer}>
          <FlatList
            horizontal
            data={dates}
            renderItem={renderDateItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Hora (mostrado após selecionar a data) */}
        {selectedDate !== '' && (
          <View style={styles.timesContainer}>
            <View style={styles.timesTitleContainer}>
              <Text style={styles.timesTitleText}>Horários disponíveis</Text>
            </View>
            <FlatList
              horizontal
              data={times}
              renderItem={renderTimeItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}

        {/* Botão de agendar */}
        {selectedTime !== '' && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              // Implemente a lógica para agendar aqui
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Marcar</Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};



export default Checkout;
