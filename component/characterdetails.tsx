import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons'; 
import { Item } from "../hooks/useGetCharacterByName";
import PowerStatsChart from './PowerStatsChart';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface PowerStats {
  intelligence?: string;
  strength?: string;
  speed?: string;
  durability?: string;
  power?: string;
  combat?: string;
}

type RootStackParamList = {
  CharacterDetails: { character: Item };
};

type CharacterDetailsRouteProp = RouteProp<RootStackParamList, 'CharacterDetails'>;

interface CharacterDetailsProps {
  route: CharacterDetailsRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'CharacterDetails'>;
  character: Item;
}

export default function CharacterDetails({ route }: CharacterDetailsProps) {
  const { character } = route.params;
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Image
        style={styles.image}
        source={{ uri: character?.image?.url }}
      />
      <View style={[styles.overlay, {paddingTop:top}]}>
        <ScrollView>
          <Text style={styles.title}>{character?.name}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>{character?.biography!['full-name']}</Text>
            <View style={styles.iconText}>
              <FontAwesome name="map-marker" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>Lieu de naissance: {character?.biography!['place-of-birth']}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="book" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.biography!['first-appearance']}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="venus-mars" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.appearance?.gender}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="user" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.appearance?.race}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="arrows-v" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.appearance?.height?.[1]}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="balance-scale" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.appearance?.weight?.[1]}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="eye" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.appearance?.["eye-color"]}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="paint-brush" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>{character?.appearance?.["hair-color"]}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="briefcase" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>Métier: {character?.work?.occupation}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="map-marker" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>Base: {character?.work?.base}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="users" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>Affiliation: {character?.connections?.["group-affiliation"]}</Text>
            </View>
            <View style={styles.iconText}>
              <FontAwesome name="users" size={16} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.sectionTitle}>Relations: {character?.connections?.relatives}</Text>
            </View>
            <View>
              <PowerStatsChart character={character.powerstats} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  textContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF0000',
    textAlign: 'center',
    marginBottom: 10,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
