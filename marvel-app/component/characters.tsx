import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreenCharacteres() {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../image/spider_man.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Peter Paker</Text>
          <Text style={styles.title}>Spider Man</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    marginRight: 170,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: -510,
    backgroundColor: 'rgba(42, 42, 42, 0.62)',
  },
  image: {
    resizeMode: "contain",
    borderRadius: 5,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});