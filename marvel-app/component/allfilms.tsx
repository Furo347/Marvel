import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const SuperheroDisplay = () => {
  const [marvelSuperheroes, setMarvelSuperheroes] = useState([]);

  useEffect(() => {
    const fetchDataForSuperhero = async () => {
      try {
        const response = await fetch('https://mcuapi.herokuapp.com/api/v1/movies');
        const data = await response.json();

        console.log('API Response:', data);

        if (data.data && Array.isArray(data.data)) {
          const superheroesData = data.data.map(superhero => ({
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

  return (
    <View style={styles.imageContainer}>
    <FlatList
      data={marvelSuperheroes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={{ uri: item.image }} 
          />
          <Text>ID: {item.id}</Text>
          <Text>Name: {item.name}</Text>
          <Text>Phase: {item.phase}</Text>
        </View>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'rgba(42, 42, 42, 0.62)',
    margin: 10,
    alignItems: "center"
  },
  imageContainer: {
    marginTop: 60,
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 5,
    width: 100,
    height: 150,
  },
});


export default SuperheroDisplay;
