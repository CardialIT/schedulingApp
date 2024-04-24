import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

///import Profile from './src/BottomTab/Profile';
import HomeAdmin from "./src/BottomTab/HomeAdmin";
import Home from "./src/BottomTab/Home";
import Agendar from "./src/BottomTab/Agendar";

import Checkout from "./src/AgendarStack/Checkout";

const AgendarStack = createStackNavigator();

function AgendarStackScreen() {
  return (
    <AgendarStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <AgendarStack.Screen name="AgendarScreen" component={Agendar} />
      <AgendarStack.Screen name="Checkout" component={Checkout} />
    </AgendarStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Informações" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Início" component={HomeAdmin} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function HomeTabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "HomeAdmin":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Agendar":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "Perfil":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={24} color={"#352F44"} />;
        },
        tabBarActiveTintColor: "#352F44",
        tabBarInactiveTintColor: "#B9B4C7",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Agendar" component={AgendarStackScreen} />

      <Tab.Screen name="Perfil" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeTabsScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
