import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import profileImage from "../assets/thalis.png";
import clientImage from "../assets/clientImage.png";
import clientImage1 from "../assets/clientImage1.png";
import barberImage1 from "../assets/barberImage1.png";
import clockImage from "../assets/clock.png";
import calendarImage from "../assets/calendar.png";

const Appointment = ({
  clientName,
  service,
  date,
  realizationt,
  clientImage,
}) => {
  return (
    <View style={styles.bubble1}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.clientImageContainer}>
          <Image style={styles.clientImageImage} source={clientImage} />
        </View>
        <View style={styles.appointmentContent}>
          <Text style={styles.barberName}>{clientNameName}</Text>
          <Text style={styles.serviceType}>{service}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.realizationt}>{realizationt}</Text>
      </View>
    </View>
  );
};

const HomeAdmin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.title}>Olá Gilberto</Text>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={profileImage} />
        </View>
      </View>

      <View style={styles.bubble}>
        <View
          style={{
            marginBottom: 32,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.service}>
            <View>
              <Image style={styles.clientImage} source={clientImageImage} />
            </View>
            <View style={styles.bubbleContent}>
              <Text style={styles.clientImage}>Thalis Antunes</Text>
              <Text style={styles.serviceType1}>Corte degradê</Text>
            </View>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={{ fontSize: 40, color: "white" }}>{">"}</Text>
          </View>
        </View>
        <View style={{ padding: 20 }}></View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image style={styles.calendarImage} source={calendarImage} />
          <Text style={styles.date1}>Segunda, 12 Junho 11:00 - 12:00 AM</Text>
        </View>
      </View>

      <Appointment
        clientName="Matheus Mayor"
        service="Sobrancelha"
        realizationt="Segunda, 12 Junho as 11:00"
        //clientImage={barberImage1}
      />
      <Appointment
        barberName="Stefano Luis"
        service="Barba e cabelo"
        barberImage={barberImage}
        realizationt="Segunda, 20 Junho as 17:00"
      />
    </View>
  );
};

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

export default HomeAdmin;
