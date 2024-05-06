import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 10,
      },
      title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
      },
      userInfo: {
        marginBottom: 33,
        marginHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      profileImageContainer: {
        justifyContent: "flex-end",
      },
      profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
      },
      service: {
        flexDirection: "row",
      },
      bubble: {
        marginBottom: 32,
        flexDirection: "colunm",
        backgroundColor: "#FF27A2",
        borderRadius: 30,
        padding: 20,
        justifyContent: "flex-start",
        marginLeft: 28,
      },
      appointmentContainer: {
        marginLeft: 28,
      },
      bubble1: {
        flexDirection: "column",
        backgroundColor: "#FAFAFA",
        borderRadius: 30,
        padding: 20,
        alignItems: "row",
        justifyContent: "flex-start",
        marginBottom: 20,
      },
    
      barberImageContainer: {
        marginRight: 10,
      },
      barberImage1: {
        width: 48,
        height: 48,
      },
      realizedText: {
        marginTop: 40,
        color: "#DD3E7B",
        alignItems: "baseline",
      },
      barberName: {
        color: "#00000",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
      },
      barberName1: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
      },
      bubbleContent: {
        flex: 1,
        justifyContent: "flex-start",
      },
      serviceType: {
        fontSize: 18,
        fontWeight: "normal",
        color: "#000000",
        justifyContent: "flex-start",
      },
      serviceType1: {
        fontSize: 18,
        fontWeight: "normal",
        color: "#FFFFFF",
        justifyContent: "flex-start",
      },
      lineImage: {
        width: "auto",
        height: 2,
        paddingHorizontal: 20,
        paddingHorizontal: 16,
        backgroundolor: "Black",
      },
      date: {
        fontSize: 16,
        marginTop: 5,
        color: "#000000",
      },
      date1: {
        fontSize: 16,
        marginTop: 5,
        color: "#FFFFFF",
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
      },
      previousAppointments: {
        marginLeft: 10,
      },
      appointmentContent: {
        marginBottom: 40,
      },
      appointment: {
        flexDirection: "row",
        fontSize: 16,
        marginBottom: 90,
      },
      home: {
        alignItems: "center",
      },
      homeText: {
        fontSize: 16,
        color: "#007AFF",
      },
      barberImage: {
        width: 48,
        height: 48,
        borderRadius: 30,
        marginRight: 10,
      },
});
//ola.

export default styles;