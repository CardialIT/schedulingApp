import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        <View style={{ width: 63, height: 72,backgroundColor:  'white', padding: 10, borderRadius: 10, margin: 5, borderWidth: 1.5, borderColor: selectedDate === item.date ? '#FF27A2':'#7A7A7A' }}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18,color: selectedDate === item.date ? '#FF27A2':'#7A7A7A'}}>{item.date}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 15,marginTop:10,color: selectedDate === item.date ? '#FF27A2':'#7A7A7A', marginTop: selectedDate === item.date ? 4:15,}}>{item.dayOfWeek}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity  onPress={() => setSelectedTime(item.time)}>
      <View style={{ paddingHorizontal:42,paddingTop:13,backgroundColor:'white', padding: 10, borderRadius: 10, margin: 5, borderWidth: 1.5, borderColor: selectedTime === item.time ? '#FF27A2':'#7A7A7A' }}>
        <Text style={{fontWeight: 'bold', fontSize: 18,color: selectedTime === item.time ? '#FF27A2':'#7A7A7A' }}>{item.time}</Text>
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
    <View style={{ flex: 1 ,backgroundColor:'#FFFFFF'}}>
      {/* Foto, nome e profissão */}
    
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Image
          source={require('../../assets/icone.png')}
          style={{ width: 98, height: 98, borderRadius: 100, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 1 }}>Fernando Andrade</Text>
        <Text style={{ fontSize: 14,fontWeight: '30',color:'#7A7A7A' }}>Barbeiro</Text>
      </View>
      <View style={{ width: '98%', borderBottomWidth: 1, borderBottomColor: '#7A7A7A', marginHorizontal: 5, marginTop: 25,opacity:"10%" }} />

      {/* Seleção do Dia */}
      <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: '400', marginTop: 10, fontWeight: 'bold' }}>Selecionar o dia e hora</Text>
      </View>

      {/* Navegação de mês e seleção do dia */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 10, marginBottom: 10, marginTop: 34, }}>
        <TouchableOpacity onPress={() => changeMonth('previous')}>
          <Text style={{ fontSize: 20, color: '#000000', marginRight: 20 }}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>{months[currentMonthIndex]}</Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <Text style={{ fontSize: 20, color: '#000000', marginLeft: 20 }}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Data */}
      <View style={{marginLeft:20}}>
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
        <View style={{ marginTop: 20,paddingLeft:20,paddingRight:20 }}>
          <View style={{ alignItems: 'flex-start', margin: 10 }}>
            <Text style={{ fontWeight: 'bold',fontSize: 24,}}>
              Horários disponíveis
            </Text>
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
          style={{ alignItems: 'center', marginTop: 34 }}
          onPress={() => {
            // Implemente a lógica para agendar aqui
          }}
        >
          <View style={{ backgroundColor: '#DD3E7B', paddingVertical: 20, paddingHorizontal: 130, borderRadius: 15 }}>
            <Text style={{fontSize: 20, color: 'white' }}>Marcar</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Checkout;