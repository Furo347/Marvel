import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

type superhero = {
  id:number,
  title:string,
  phase:string,
  cover_url:string,
}

type item = {
  id:number,
  image:string,
  name:string,
}

const SuperheroDisplay = () => {
  const [marvelSuperheroes, setMarvelSuperheroes] = useState([]);

  useEffect(() => {
    const fetchDataForSuperhero = async () => {
      try {
        const response = await fetch('https://mcuapi.herokuapp.com/api/v1/movies');
        const data = await response.json();

        if (data.data && Array.isArray(data.data)) {
          const superheroesData = data.data.map((superhero:superhero) => ({
            id: superhero.id,
            name: superhero.title,
            phase: superhero.phase,
            image: superhero.cover_url,
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
    return <Text>Loading...</Text>;
  }

  function goToCharacterDetails(character: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.scrollViewContent}>
      <FlatList
        data={marvelSuperheroes}
        keyExtractor={(item:item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: item?.image }} 
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name || ''}</Text>
              <Text style={styles.details}>Voir les détails</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10,
    top: 10,
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    bottom:"20%",
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
});

export default SuperheroDisplay;
