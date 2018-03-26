import React from 'react';
import {
  StyleSheet,
  Text,
  View
 } from 'react-native';
//import VolumeBalok from './SRC/Latihan/VolumeBalok';
//import LayoutRN from './src/layout/LayoutRN';
//import BelajarLayout from './src/layout/BelajarLayout';
import PrakiraanCuaca from './src/Cuaca/PrakiraanCuaca';
//import PrakiraanCuaca1 from './src/Cuaca/PrakiraanCuaca1';

export default class App extends React.Component {

  render() {
    return (

        <PrakiraanCuaca />
        //  <PrakiraanCuaca1 />

      //<LayoutRN />
     //<BelajarLayout />
    );
  }
}
