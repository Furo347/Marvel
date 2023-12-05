import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Film } from '../hooks/useGetFilmByName';

const { width, height } = Dimensions.get('window');

const SuperheroDisplay = () => {
  const [marvelSuperheroes, setMarvelSuperheroes] = useState<Film[]>([]);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const goToFilmsDetails = (film: Film) => {
    navigation.navigate('FilmsDetails', { film });
  };

  useEffect(() => {
    const fetchDataForSuperhero = async () => {
      try {
        const response = await fetch('https://mcuapi.herokuapp.com/api/v1/movies');
        const data = await response.json();

        if (data.data && Array.isArray(data.data)) {
          const superheroesData: Film[] = data.data.map((superhero: Film) => ({
            id: superhero.id,
            title: superhero.title,
            phase: superhero.phase,
            cover_url: superhero.cover_url,
            release_date: superhero.release_date,
            box_office: superhero.box_office,
            duration: superhero.duration,
            overview: superhero.overview,
            trailer_url: superhero.trailer_url,
            directed_by: superhero.directed_by,
            saga: superhero.saga,
            chronology: superhero.chronology,
            post_credit_scenes: superhero.post_credit_scenes,
          }));

          setMarvelSuperheroes(superheroesData);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching superhero data:', error);
      }
    };

    fetchDataForSuperhero();
  }, []);

  if (marvelSuperheroes.length === 0) {
    return (    
    <View style={styles.cont}>
      <Image
        style={styles.img}
        source={require('../image/shield.png')}
      />
    </View>)
  }

  return (
    <View style={styles.scrollViewContent}>
      <FlatList
        data={marvelSuperheroes}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => goToFilmsDetails(item)} >
              <Image
                style={styles.image}
                source={{ uri: item?.cover_url }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title || ''}</Text>
                <Text style={styles.details}>Voir les détails</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom:"20%",
    paddingHorizontal: 10,
    top: 10,
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    height: 300,
    width: '45%',
    marginLeft: "1%",
    marginRight: "5%",
    marginBottom: "5%",
    position: "relative",
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajoutez un fond semi-transparent pour améliorer la lisibilité du texte
  },
  sectionTitle: {
    fontSize: 10,
    elevation: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  categorie: {
    fontSize: 20,
    fontWeight: '800',
    color: 'red',
    marginBottom: 10,
    marginTop: 10,
  },
  details: {
    color: 'white',
  },
  cont : {
  },
  img: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: height/4,
    left: width/3
  }
});

export default SuperheroDisplay;
