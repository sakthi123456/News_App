import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Pressable, Image, ScrollView } from "react-native";
// import { API_KEY } from "@env"; // Import API key from .env file
import Search from "react-native-vector-icons/EvilIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
const API_KEY = '831807616580c7aad18be484cb42ff9f'

const Home = () => {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        alert("City not found!");
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const parseImageUrl = useCallback(
    () => {
      const icon = weather?.weather[0].icon ;
      if (icon === "01d" || icon === "01n") {
        return require("../../assets/clear.png");
      } else if (icon === "02d" || icon === "02n") {
        return require("../../assets/cloud.png");
      } else if (icon === "03d" || icon === "03n") {
        return require("../../assets/cloud.png");
      } else if (icon === "04d" || icon === "04n") {
        return require("../../assets/drizzle.png");
      } else if (icon === "09d" || icon === "09n") {
        return require("../../assets/rain.png");
      } else if (icon === "10d" || icon === "10n") {
        return require("../../assets/rain.png");
      } else if (icon === "11d" || icon === "11n") {
        return require("../../assets/rain.png");
      } else if (icon === "13d" || icon === "13n") {
        return require("../../assets/snow.png");
      } else if (icon === "50d" || icon === "50n") {
        return require("../../assets/mist.png");
      }

    },
    [weather]
  )

  const formattedTime = weather?.dt
    ? new Date(weather.dt * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    : "";

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E293B' }}>
      <View style={styles.main}>
        <TextInput
          style={styles.search}
          placeholder="Search city"
          placeholderTextColor={"white"}
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <Pressable
          style={styles.buttonSearch}
          onPress={() => fetchWeather()}>
          <Search name='search' size={35} color="white" />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.totalView}>
          <Image
            source={parseImageUrl()}
            style={styles.box}
            resizeMode="stretch"
          />
          <View style={styles.weather}>
            <Text style={styles.weatherText}>
              {weather?.main?.temp}°C
              {/* 31°C */}
            </Text>
            <Text style={styles.weatherCity}>
              {weather?.name}
            </Text>
          </View>

          <View style={styles.climateView}>
            <View style={styles.climateTem}>
              <FontAwesome5 name="temperature-high" size={22} color="white" />
              <View>
                <Text style={styles.txt}>
                  {weather?.main?.feels_like}
                </Text>
                <Text style={styles.text}>Feels Like</Text>
              </View>
            </View>
            <View style={styles.containerHum}>
              <Entypo name="air" size={22} color="white" />
              <View>
                <Text style={styles.Humtext}>
                  {weather?.main.humidity}%
                </Text>
                <Text style={styles.textHu}>Humidity</Text>
              </View>
            </View>
            <View style={styles.windcontainer}>
              <Feather name="wind" size={22} color="white" />
              <View>
                <Text style={styles.windtext}>
                  {weather?.wind.speed} kmph
                </Text>
                <Text style={styles.windhead}>Wind Speed</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ListContainer}>
          <Text style={styles.textHorly}>
            Hourly Forecast
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerScroll}
          >
            <View
              style={styles.containerHourly}
            >
              <Image
                source={parseImageUrl() }
                style={styles.boxHourly}
                resizeMode="stretch"
              />
              <View style={styles.textDeg}>
                <Text style={styles.textHorly}>
                  {Math.floor(weather?.main?.temp)}°C
                </Text>
                <Text style={styles.textCol}>{formattedTime}</Text>
              </View>
            </View>
          </ScrollView>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 32,
    backgroundColor: '#1E293B',
  },
  main: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingTop: 12,
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  search: {

    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 9999,
    width: '87%',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonSearch: {
    backgroundColor: '#1E293B',
    // padding: 8,
    borderRadius: 9999,
  },
  totalView: {
    rowGap: 30,
    alignItems: 'center',
    backgroundColor: '#1E293B',
  },
  box: {
    width: 192,
    height: 192,
    top: 20
  },
  weather: {
    // rowGap: 12,
    alignItems: 'center'
  },
  weatherText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '600'
  },
  weatherCity: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  climateView: {
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  climateTem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  txt: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: 18,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  containerHum: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  Humtext: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: 18,
  },
  textHu: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  windcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  windtext: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: 18,
  },
  windhead: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  appBarWarpper: {
    // marginHorizontal: 2,
    marginTop: 10,

  },
  appBar: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    // padding: 5
  },
  location: {
    fontFamily: 'bold',
    fontSize: 17,
    color: '#872341',
    fontStyle: "normal",
    fontWeight: '700',
    fontVariant: 'small-caps',
    // textDecorationColor: 'black',
    textShadowColor: 'white',
    textShadowRadius: 20,
    // textTransform: 'capitalize',
    textShadowOffset: { object: { width: 20, height: 20 } },
    writingDirection: 'ltr',
    // bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1

  },

  ListContainer: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    marginTop: 16,
    gap: 15,
    flexDirection: "column",
  },
  textHorly: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 6,
  },
  containerScroll: {
    // paddingHorizontal: 12,
    // paddingVertical: 16,
    // marginTop: 16,
    // gap: 20,
  },
  containerHourly: {
    width: 176, 
    height: 176,
    backgroundColor: "#1e3a8a",
    borderRadius: 12, 
    alignItems: "center",
    justifyContent: "center", 
    gap: 6,
  },
  boxHourly: {
    width: 80,
    height: 80, 
  },
  textDeg: {
    alignItems: "center", 
    gap: 4, 
  },
  textHorly: {
    color: "#ffffff", 
    fontSize: 24, 
    fontWeight: "bold", 
  },
  textCol: {
    color: "#d1d5db", 
  },
});

export default Home;
