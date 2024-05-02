import * as Location from "expo-location";
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { Fontisto } from "@expo/vector-icons";

const { width : SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);
const API_KEY = `784ab24ff2ed5d94d4288abed9e25d13`;

const Icons = 
{
Clear: "day-sunny",
Clouds: "cloudy",
Rain: "rain",
Atmosphere: "cloudy-gusts",
Snow: "snow",
Drizzle: "day-rain",
Thunderstorm: "lightning",
};

export default function App() {
  // 도시
  const [city, setCity] = useState("Loading...");
  // daily 일기예보
  const [days, setDays] = useState([]);

  // 사용자 허가
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    // 1.권한요청
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    // 2.유저위치정보
    // 2-1 getCurrentPositionAsync를 이용하여 현재위치를 기반으로 lat, long의 정보를 얻을 수 있다
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
    // console.log({latitude, longitude});

    // 2-2 reverseGeocodeAsync를 이용하여 lat, long을 기반으로 주소를 알아 낼 수 있다.
    //(Geocode는 주소를 알려주면 lat, long을 알려준다.)
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude}, 
      {useGoogleMaps: false}
    );
    // console.log(location[0].region, location[0].district);

    // 2-3 위의 과정을 통하여 응답으로 유저가 있는 도시의 이름을 얻는다. -> 얻은 정보는 setCity로 설정
    setCity(location[0].region)

    //3.API이용하기
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&APPID=${API_KEY}&units=metric`);
    const json = await response.json();
    // console.log(json.daily);
    setDays(json.daily);
    // console.log(days.length);
    // console.log(days);
  }
  useEffect(() => {
    getWeather();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
        showsHorizontalScrollIndicator={false} 
        pagingEnabled 
        horizontal 
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" size="large" style={{ marginTop: 10}} />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View style={{ 
                  flexDirection: "row", 
                  alignItems:"center", 
                  justifyContent:"center", 
                  width: "100%"
                }}>
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(0)}</Text>
                <Fontisto name={Icons[day.weather[0].main]} size={80} color="white" />
              </View>

              <Text style={styles.desc}>{day.weather[0].main}</Text>
              <Text style={styles.desc_detail}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: "blue",
    
  }, 
  city : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName : {
    fontSize: 68,
    fontWeight: "500",
    color: "white",
  },
  weather : {

    
  },
  day : {
    width: SCREEN_WIDTH,
    alignItems: "center",
    
    
  },
  temp : {
    fontSize: 150,
    marginTop: 50,
    color: "white",
  },
  desc:{
    fontSize: 60,
    marginTop: -30,
    color: "white",
  },
  desc_detail: {
    fontSize: 20,
    color: "white",
  },
})