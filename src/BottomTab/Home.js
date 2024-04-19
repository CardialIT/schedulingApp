import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import profileImage from "../../assets/thalis.png";
import barberImage from "../../assets/barberImage.png";
import barberImage1 from "../../assets/barberImage1.png";
import lineImage from "../../assets/line.png";
///import clockImage from "../../assets/clock.png";
import calendarImage from "../../assets/calendar.png";

const Home = () => {
  const [barberName, setbarberName] = useState([]);
  useEffect(() => {
    // Função para buscar os barbeiros do backend
    const fetchBarberName = async () => {
      try {
        const response = await fetch("URL_DO_BACKEND/barberName");
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
  lineImage,
  date,
  realizedText,
  barberImage,
}) => {
  return (
    <View style={styles.bubble1}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.barberImageContainer}>
          <Image style={styles.barberImage1} source={barberImage} />
        </View>
        <View style={styles.appointmentContent}>
          <Text style={styles.barberName}>{barberName}</Text>
          <Text style={styles.serviceType}>{serviceType}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Image style={styles.lineImage} source={lineImage} />
      <View>
        <Text style={styles.realizedText}>{realizedText}</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.title}>Olá Thalis</Text>
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
          lineImage={lineImage}
          barberImage={barberImage1}
        />
        <Appointment
          barberName="Fernando Andrade"
          serviceType="Barbeiro"
          barberImage={barberImage}
          realizedText="Realizado 10 Maio as 14.00"
          lineImage={lineImage}
        />
      </View>
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

export default HomeScreen;
