import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Asset({ icon, title, value }) {
    
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },
  icon: {
    alignSelf: 'center'
  },
  value: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 15,
    alignSelf: 'center'
  }
});