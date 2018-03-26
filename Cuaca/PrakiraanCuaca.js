import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');
const sunsetIcon = require('./img/sunset.png');
const sunriseIcon = require('./img/sunrise.jpg');
const pressureIcon = require('./img/presure.jpg');
const humidityIcon = require('./img/humidity.png');
const groundIcon = require('./img/ground.jpg');

//import Loader from './loading/Loader';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {

  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=f9c8e947dddba94b8e75f189e27cc023&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}
    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.inputtext}>
              <TextInput
              style = {{
              backgroundColor: 'white',
              width: 300,
              height:50
            }}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />

              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#4FC3F7"
                accessibilityLabel="Klik untuk melihat"
              />
          </View>

          <View style={styles.infocuaca}>
            <View style={styles.backkeyboard}>
              <View style={styles.kotak4}>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Kota = {this.state.city} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.kotak4}>
                <View style={styles.box}>
                    <Image source={mainIcon} style={styles.iconContainer} />
                </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Cuaca = {this.state.forecast.main} {"\n"}
                </Text>
              </View>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={mainIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Desc = {this.state.forecast.description} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={sunriseIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Sunrise = {this.state.forecast.sunrise} {"\n"}
                </Text>
              </View>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={sunsetIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Sunset = {this.state.forecast.sunset} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={tempIcon} style={styles.iconContainer} />
              </View>
              <Text style = {{padding: 10, fontSize: 15}} >
                Temp = {this.state.forecast.temp} {"'Celcius"}
              </Text>
              </View>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={windIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Wind Speed = {this.state.forecast.speed} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={levelIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Sea_level = {this.state.forecast.sea_level} {"\n"}
                </Text>
              </View>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={groundIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Grnd_level = {this.state.forecast.grnd_level} {"\n"}
                </Text>
              </View>
            </View>

            <View style={styles.backkeyboard}>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={pressureIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Pressure = {this.state.forecast.pressure} {"\n"}
                </Text>
              </View>
              <View style={styles.kotak4}>
              <View style={styles.box}>
                  <Image source={humidityIcon} style={styles.iconContainer} />
              </View>
                <Text style = {{padding: 10, fontSize: 15}} >
                  Humidity = {this.state.forecast.grnd_level} {"\n"}
                </Text>
              </View>
            </View>

          </View>

          <View style={styles.footer}>
            <Text style={styles.textfooter}>Copyright @BlackLotus</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B2EBF2',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#00BCD4',
    flex: 1,
    justifyContent: 'center'
  },

  inputtext: {
    backgroundColor: '#0097A7',
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin:10
  },

  infocuaca: {
    backgroundColor: '#E8F5E9',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  kotak4: {//kotak detail tampil
    backgroundColor: '#26C6DA',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:10,

    marginLeft: 10,
    marginRight: 10
  },

  footer: {
    backgroundColor: '#006064',
    flex: 1,
    justifyContent: 'center'
  },

  backkeyboard: {
    flex: 2,
    backgroundColor: '#00838F',
    flexDirection: 'row',
  },
iconContainer: {
  alignItems: 'center',
  backgroundColor: '#26C6DA',
  borderColor: '#26C6DA',
  //borderRadius: 15,
  borderWidth: 1,
  justifyContent: 'center',
  height: 68,
  width: 70,
},
box: {
  backgroundColor: '#26C6DA',
  flex:2,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  //marginTop: '5',
  //marginLeft: '5',
  //marginRight: '5',
  //marginBottom: '5',
},

icon: {
  tintColor: '#fff',
  height: 200,
  width: 20,
},
  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },
  text1: {
    padding: 15, fontSize: 30, color: 'white', textAlign: 'center', fontWeight:'bold'
  },
  text2: {
    padding: 15, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  },
  textfooter: {
    padding: 15, fontSize: 15, color: 'white', textAlign: 'center', fontWeight:'bold'
  }
});
