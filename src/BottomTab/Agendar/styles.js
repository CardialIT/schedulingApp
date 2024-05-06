import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        flex: 1,
        marginTop: 30
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        paddingVertical: 10,
        paddingHorizontal: 4
    },

    button: {
        backgroundColor: '#E1F1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 6,
    },

    buttonText: {
        color: '#DD3E7B',
        fontWeight: 'bold',
        fontSize: 14
    },

    secondContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
    },

    imageContainer: {
        marginRight: 20,
    },

    backgroundContainer: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 10
    },

    textName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    textWork: {
        color: 'gray'
    },

    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginHorizontal: 20,
        marginTop: 20,
    },

    agenda: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'start',
        alignItems: 'center',
    },

    calendarImage: {
        marginRight: 10
    },

    calendarText: {
        color: 'gray'
    }
});
//ola.

export default styles;