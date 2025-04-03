import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, SafeAreaView, Pressable, Image, ScrollView, ActivityIndicator } from "react-native";
import Search from "react-native-vector-icons/EvilIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/weatherReducer";
import styles from './HomeStyle.js'

const Home = () => {
  const [city, setCity] = useState("Chennai");
  const dispatch = useDispatch();
  const { weatherData, loading } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("Chennai"));
  }, []);

  const parseImageUrl = useCallback(
    () => {
      const icon = weatherData?.weather[0].icon;
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
    [weatherData]
  )

  const formattedTime = weatherData?.dt
    ? new Date(weatherData.dt * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    : "";

  return (

    <SafeAreaView style={styles.safeArea}>
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
          onPress={() => dispatch(fetchWeather(city))}>
          <Search name='search' size={35} color="white" />
        </Pressable>
      </View>
      {loading && (
        <>
          <View style={styles.footer}>
            <ActivityIndicator size="large" color="black" />
            <Text style={{ color: 'black', fontSize: 15 }}>Loading....</Text>
          </View>
        </>
      )}
      <ScrollView>
        <View style={styles.totalView}>
          <Image
            source={parseImageUrl()}
            style={styles.box}
            resizeMode="stretch"
          />
          <View style={styles.weather}>
            <Text style={styles.weatherText}>
              {weatherData?.main?.temp}°C
              {/* 31°C */}
            </Text>
            <Text style={styles.weatherCity}>
              {weatherData?.name}
            </Text>
          </View>

          <View style={styles.climateView}>
            <View style={styles.climateTem}>
              <FontAwesome5 name="temperature-high" size={22} color="white" />
              <View>
                <Text style={styles.txt}>
                  {weatherData?.main?.feels_like}
                </Text>
                <Text style={styles.text}>Feels Like</Text>
              </View>
            </View>
            <View style={styles.containerHum}>
              <Entypo name="air" size={22} color="white" />
              <View>
                <Text style={styles.Humtext}>
                  {weatherData?.main.humidity}%
                </Text>
                <Text style={styles.textHu}>Humidity</Text>
              </View>
            </View>
            <View style={styles.windcontainer}>
              <Feather name="wind" size={22} color="white" />
              <View>
                <Text style={styles.windtext}>
                  {weatherData?.wind.speed} kmph
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
                source={parseImageUrl()}
                style={styles.boxHourly}
                resizeMode="stretch"
              />
              <View style={styles.textDeg}>
                <Text style={styles.textHorly}>
                  {Math.floor(weatherData?.main?.temp)}°C
                </Text>
                <Text style={styles.textCol}>{formattedTime}</Text>
              </View>
            </View>
          </ScrollView>

        </View>
      </ScrollView>
    </SafeAreaView >
  );
};



export default Home;
