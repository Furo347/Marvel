import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const ComicList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8c6e8b0d783ac6d53839a57854c756de&hash=bb9623e9ff8a524642d424386f899ab8');
        const data = await response.json();
        setComics(data.data.results); // Assuming 'data' contains the provided JSON structure
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log(fetchData());
  }, []);

  return (
    <View>
      <FlatList
        data={comics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item.title}</Text>
            <Image
              source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
              style={{ width: 50, height: 50 }}
            />
            {/* Render other relevant data */}
          </View>
        )}
      />
    </View>
  );
};

export default ComicList;
