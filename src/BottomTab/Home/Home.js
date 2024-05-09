import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import profileImage from "../../../assets/thalis.png";
import barberImage from "../../../assets/barberImage.png";
import barberImage1 from "../../../assets/barberImage1.png";
import lineImage from "../../../assets/line.png";
import calendarImage from "../../../assets/calendar.png";
import styles from "./styles";

const Home = () => {
  const [barberName, setBarberName] = useState([]);

  useEffect(() => {
    const fetchBarberName = async () => {
      try {
        const response = await fetch(
          "https://agendi-server.onrender.com/professionals"
        );
        const jsonData = await response.json();
        setBarberName(jsonData);
      } catch (error) {
        console.error("Erro ao buscar dados dos barbeiros do backend:", error);
      }
    };

    fetchBarberName();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Appointment = ({
  barberName,
  serviceType,
  lineImageSrc,
  date,
  realizedText,
  barberImageSrc,
}) => {
  return (
    <View style={styles.bubble1}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.barberImageContainer}>
          <Image style={styles.barberImage1} source={barberImageSrc} />
        </View>
        <View style={styles.appointmentContent}>
          <Text style={styles.barberName}>{barberName}</Text>
          <Text style={styles.serviceType}>{serviceType}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Image style={styles.lineImage} source={lineImageSrc} />
      <View>
        <Text style={styles.realizedText}>{realizedText}</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const [barberName, setBarberName] = useState([]);

  useEffect(() => {
    const fetchBarberName = async () => {
      try {
        const response = await fetch(
          "https://agendi-server.onrender.com/professionals"
        );
        const jsonName = await response.json();
        setBarberName(jsonName.map);
      } catch (error) {
        console.error("Erro ao buscar dados dos barbeiros do backend:", error);
      }
    };

    fetchBarberName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.title}>Olá Thalis</Text>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={profileImage} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.bubble}>
          <TouchableOpacity>
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
                  <Image style={styles.barberImage} source={barberImage} />
                </View>
                <View style={styles.bubbleContent}>
                  <Text style={styles.barberName1}>Fernando Andrade</Text>
                  <Text style={styles.serviceType1}>Barbeiro</Text>
                </View>
              </View>
              <View style={{ marginLeft: "auto" }}>
                <Text style={{ fontSize: 40, color: "white" }}>{">"}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ padding: 20 }}>
            <Image style={styles.lineImage} source={lineImage} />
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

        <View style={styles.appointmentContainer}>
          <Text style={styles.sectionTitle}>Últimos agendamentos</Text>
          <Appointment
            barberName="Gilberto Farias"
            serviceType="Barbeiro"
            realizedText="Realizado 29 Maio as 17.00"
            lineImageSrc={lineImage}
            barberImageSrc={barberImage1}
          />
          <Appointment
            barberName="Fernando Andrade"
            serviceType="Barbeiro"
            barberImageSrc={barberImage}
            realizedText="Realizado 10 Maio as 14.00"
            lineImageSrc={lineImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
