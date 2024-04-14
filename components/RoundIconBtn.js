import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'


const RoundIconBtn = ({antIconName, size, color}) => {
  return <AntDesign name={antIconName} size={size} color={color} />
}

export default RoundIconBtn

const styles = StyleSheet.create({

})