import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import profileImage from "../../assets/gilberto.png";
import clientImage from "../../assets/thalis.png";
import clientImage1 from "../../assets/mayor.png";
import clientImage2 from "../../assets/clientImage1.png";
//import clockImage from "../../assets/clock.png";
import calendarImage from "../../assets/calendar.png";
import { ScrollView } from "react-native-gesture-handler";

const Appointment = ({
  clientName,
  service,
  date,
  realization,
  clientImage,
}) => {
  return (
    <View style={styles.bubble1}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.clientImageContainer}>
          <Image style={styles.clientImageImage} source={clientImage} />
        </View>
        <View style={styles.appointmentContent}>
          <Text style={styles.barberName}>{clientName}</Text>
          <Text style={styles.serviceType}>{service}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.realization}>{realization}</Text>
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

      <ScrollView>
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
                <Image style={styles.clientImage} source={clientImage} />
              </View>
              <View style={styles.bubbleContent}>
                <Text style={styles.clientName}>Thalis Antunes</Text>
                <Text style={styles.serviceType1}>Baby liss</Text>
              </View>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Text style={{ fontSize: 40, color: "white" }}>{">"}</Text>
            </View>
          </View>

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
                <Image style={styles.clientImage} source={clientImage1} />
              </View>
              <View style={styles.bubbleContent}>
                <Text style={styles.clientName}>Matheus Mayor</Text>
                <Text style={styles.serviceType1}>Sombracelha</Text>
              </View>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Text style={{ fontSize: 40, color: "white" }}>{">"}</Text>
            </View>
          </View>

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
                <Image style={styles.clientImage} source={clientImage2} />
              </View>
              <View style={styles.bubbleContent}>
                <Text style={styles.clientName}>Stéfano Luis</Text>
                <Text style={styles.serviceType1}>Barba e cabelo</Text>
              </View>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Text style={{ fontSize: 40, color: "white" }}>{">"}</Text>
            </View>
          </View>

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
      </ScrollView>
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
    flexDirection: "column",
    backgroundColor: "#FF27A2",
    borderRadius: 30,
    padding: 20,
    justifyContent: "flex-start",
    marginHorizontal: 24,
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
  clientImage: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  realization: {
    marginTop: 40,
    color: "#DD3E7B",
    alignItems: "baseline",
  },
  barberName: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  clientName: {
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
    backgroundColor: "black",
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
});
export default HomeAdmin;
