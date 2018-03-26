import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    kota: '',
    forecast: {
        main: '-',
        description: '-',
        temp: 0,
      }
  };
}
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota + '&appid=58da9bfc6af4de163c35f71bf0757880&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
        }
      });
    }
  );
}
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.kotak}>
          <Text style={styles.Texthead}>Prakiraan Cuaca</Text>
        </View>
        <View style={styles.kotak2}>
          <View style={}>
            <Text style={styles.Texthead2}>Masukan Nama Kota</Text>
          </View>
          <View style={styles.kotak21}>
            <TextInput
              onChangeText={(kota) => this.setState({ kota })}
            />
            <Button
            onPress={() => this.getWeather()}
              title="Lihat"
              color="#4FC3F7"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
          </View>
          <View style={styles.kotak22}>
            <Text style={styles.Texthead2}></Text>
          </View>

        </View>
        <View style={styles.kotak3}>
          <Text style={styles.Texthead3}>
            Suhu : {this.state.forecast.temp}{"\n"}
            Cuaca : {this.state.forecast.main}{"\n"}
            Deskripsi : {this.state.forecast.description}{"\n"}
          </Text>
        </View>
        <View style={styles.kotak4}>
          <Text style={styles.Texthead}>copyright @BlackLotus</Text>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B2EBF2',
    flex: 1,
    flexDirection: 'column'
  },
  kotak: {
    flex: 1,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  kotak2: {
    flex: 3,
    backgroundColor: '#1E90FF',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  kotak21: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 60,
    marginLeft: 60
  },
  kotak22: {
    flex: 1,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  kotak3: {
    flex: 8,
    backgroundColor: '#1E90FF',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  kotak4: {
    flex: 1,
    backgroundColor: '#26C6DA',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Texthead: {
    fontSize: 23,
    color: 'white'
  },
  Texthead2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000'
  },
  Texthead3: {
    fontSize: 20,
    textAlign: 'left',
    color: '#000000'
  }
});
