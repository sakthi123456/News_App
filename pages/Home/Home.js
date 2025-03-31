import { ActivityIndicator, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Search from "react-native-vector-icons/EvilIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
// import Geolocation from "react-native-geolocation-service";
const API_KEY = "b284e3824bd94c6e9096f91b5028184d";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log(weather, 'WEATHER');
  console.log(weather, 'WEATHER')

  const fetchWeather = async () => {
    if (!city.trim()) return; // Don't fetch if city input is empty
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.main}>
          <TextInput
            style={styles.search}
            placeholder="Search city"
            placeholderTextColor={"white"}
            onChangeText={(text) => setCity(text)}
            value={city}
          // onSubmitEditing={() => ''}
          />
          <Pressable
            style={styles.buttonSearch}
            onPress={() => fetchWeather()}
          // disabled={isPending}
          >
            {/* <Feather name="search" size={26} color="white" /> */}
            <Search name='search' size={26} color="white" />
          </Pressable>
        </View>
        {loading && <ActivityIndicator size="large" color="#00f" />}

        <View style={styles.totalView}>
          <Image
            // source={parseImageUrl()}
            // source={require('../../assets/cloud.png')}
            style={styles.box}
            resizeMode="stretch"
          />
          <View style={styles.weather}>
            <Text style={styles.weatherText}>
              {/* {Math.floor(weatherData?.main.temp as number)} °C */}
              31°C
            </Text>
            <Text style={styles.weatherCity}>
              {/* {city || "Delhi"} */}
              Chennai
            </Text>
          </View>

          <View style={styles.climateView}>
            <View style={styles.climateTem}>
              <FontAwesome5 name="temperature-high" size={22} color="white" />
              <View>
                <Text style={styles.txt}>
                  {/* {weatherData?.main.feels_like}% */}
                  50%
                </Text>
                <Text style={styles.text}>Feels Like</Text>
              </View>
            </View>
            <View style={styles.containerHum}>
              <Entypo name="air" size={22} color="white" />
              <View>
                <Text style={styles.Humtext}>
                  {/* {weatherData?.main.humidity}% */}
                  40%
                </Text>
                <Text style={styles.textHu}>Humidity</Text>
              </View>
            </View>
            <View style={styles.windcontainer}>
              <Feather name="wind" size={22} color="white" />
              <View>
                <Text style={styles.windtext}>
                  {/* {weatherData?.wind.speed} kmph */}
                  25KM
                </Text>
                <Text style={styles.windhead}>Wind Speed</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    rowGap: 32,
    backgroundColor: '#1E293B',
  },
  main: {
    paddingHorizontal: 16,
    paddingTop: 12,
    flexDirection: 'row',
    columnGap: 16,
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
    backgroundColor: '#172554',
    padding: 8,
    borderRadius: 9999,
  },
  totalView: {
    rowGap: 24,
    alignItems: 'center',
    backgroundColor: '#1E293B',
  },
  box: {
    width: 192,  // w-48 -> 48 * 4px = 192px
    height: 192, // h-48 -> 48 * 4px = 192px
  },
  weather: {
    rowGap: 12,
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
    fontWeight: '500', // font-medium
    color: '#FFFFFF',  // text-white
    fontSize: 18,
  },
  text: {
    color: '#FFFFFF', // text-white
    fontSize: 12,     // text-xs -> 12px
  },
  containerHum: {
    flexDirection: 'row', // flex-row
    alignItems: 'center', // items-center
    columnGap: 16,        // gap-x-4 -> 4 * 4px = 16px (React Native 0.71+)
  },
  Humtext: {
    fontWeight: '500', // font-medium
    color: '#FFFFFF',  // text-white
    fontSize: 18,      // text-lg -> 18px
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
})
