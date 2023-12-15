import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Styles/FirstStartScreenStyleSheet';
import { generalStyles } from './Styles/GeneralStyleSheet';

//npx expo start

export default function App() {
    return (
      <View style={styles.container}>
          <View style={styles.centered}>
              <Text style={styles.welcome}>Welcome To</Text>
                <View style={generalStyles.logoContainer}>
                    <Text style={[generalStyles.logo, generalStyles.logo1]}>Team</Text>
                    <Text style={[generalStyles.logo, generalStyles.logo2]}>Mate</Text>
                </View>
                <TouchableOpacity style={[generalStyles.button, generalStyles.buttonBlack]}>
                    <Text style={generalStyles.buttonBlackText}>Create A Team</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[generalStyles.button, generalStyles.buttonGreen]}>
                    <Text style={generalStyles.buttonGreenText}>Join A Team</Text>
                </TouchableOpacity>
          </View>
      </View>
  );
}