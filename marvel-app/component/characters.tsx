import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreenCharacteres() {
  const personnagesGentils = [
    'black_panther',
    'deadpool',
    'happy_hogan',
    'howard_stark',
    'iron_man',
    'mary_jane',
    'punisher',
    'spider_man', 
    'talos',
  ];
  const personnagesMechants = [
    'dr_doom',
    'green_goblin',
    'red_skull',
    'thanos',
    'venom'
  ];

  const imageMechant = {
    dr_doom: require('../image/dr_doom.png'),
    green_goblin: require('../image/green_goblin.png'),
    red_skull: require('../image/red_skull.png'),
    thanos: require('../image/thanos.png'),
    venom: require('../image/venom.png'),
    ronan: require('../image/ronan.png'),
  }
  const imageGentil = {
    black_panther: require('../image/black_panther.png'),
    deadpool: require('../image/deadpool.png'),
    happy_hogan: require('../image/happy_hogan.png'),
    howard_stark: require('../image/howard_stark.png'),
    iron_man: require('../image/iron_man.png'),
    mary_jane: require('../image/mary_jane.png'),
    punisher: require('../image/punisher.png'),
    spider_man: require('../image/spider_man.png'),
    talos: require('../image/talos.png'),
  };

  return (
    <>
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      horizontal={true} // Permet le défilement horizontal
    >
      {personnagesGentils.map((personnage, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={imageGentil[personnage]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Gentil</Text>
            <Text style={styles.title}>{personnage}</Text>
          </View>
        </View>
      ))}
    </ScrollView>

    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      horizontal={true} >
      {personnagesMechants.map((personnage, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={imageMechant[personnage]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Méchant</Text>
            <Text style={styles.title}>{personnage}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 16,
    flexDirection: 'row', // Aligne les personnages horizontalement
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'rgba(42, 42, 42, 0.62)',
    overflow: 'hidden',
    height: 300,
    width: 150,
    marginRight: 16, // Marge entre les images pour un meilleur aspect
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
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
