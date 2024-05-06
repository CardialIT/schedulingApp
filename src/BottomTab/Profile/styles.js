import { StyleSheet } from 'react-native';

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
//ola.

export default styles;