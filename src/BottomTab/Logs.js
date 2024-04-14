import {
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';

const Logs = () => {
  const [selected, setSelected] = useState('');

  const theme = {
    selectedDayBackgroundColor: '#FAF0E6',
    selectedDayTextColor: '#352F44',
    todayTextColor: '#352F44'
  }

  return (
    <Calendar
      style={styles.calendar}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: { 
          selected: true, 
          disableTouchEvent: false, 
          selectedDotColor: 'blue' }
      }}
      theme={theme}
    />
  );
};

export default Logs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
  },

  calendar: {
    borderWidth: 0.4,
    borderColor: '#5C5470',
    height: 350,
  }
});