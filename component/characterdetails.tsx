import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Item } from "../hooks/useGetCharacterByName";

type RootStackParamList = {
  CharacterDetails: { character: Item };
};

type CharacterDetailsRouteProp = RouteProp<RootStackParamList, 'CharacterDetails'>;

interface CharacterDetailsProps {
  route: CharacterDetailsRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'CharacterDetails'>;
}

export default function CharacterDetails({ route, navigation }: CharacterDetailsProps) {
  const { character } = route.params;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: character?.image?.url }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>{character?.biography['full-name']}</Text>
          <Text style={styles.title}>{character?.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    flatListContainer: {
      padding: 10, // Add padding to space out the items
    },
    container: {
      width: 150, // Adjust width of each container
      height: 150, // Adjust height of each container
      borderRadius: 10,
      overflow: 'hidden',
      padding: 10,
      margin: 5, // Add margin to space out the containers
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    textContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(42, 42, 42, 0.62)',
      padding: 5,
    },
    sectionTitle: {
      fontSize: 8,
      fontWeight: '300',
      color: '#FFFFFF',
    },
    title: {
      fontSize: 16,
      fontWeight: '800',
      color: '#FFFFFF',
    },
  });