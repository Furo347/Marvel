import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";
import Constants from "expo-constants";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Film } from "../hooks/useGetFilmByName";
type RootStackParamList = {
    FilmsDetails: { film: Film };
};

type FilmsDetailsRouteProp = RouteProp<RootStackParamList, 'FilmsDetails'>;

interface FilmsDetailsProps {
  route: FilmsDetailsRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'FilmsDetails'>;
}

const FilmsDetails = ({ route, navigation }: FilmsDetailsProps) => {
  const { film } = route.params;
  const formattedDate = format(new Date(film.release_date), "dd/MM/yyyy", { locale: fr });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: film.cover_url }}
      />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Titre: {film.title}</Text>
          <Text style={styles.sectionTitle}>Date de sortie: {formattedDate}</Text>
          <Text style={styles.sectionTitle}>Réalisateur: {film.directed_by}</Text>
          <Text style={styles.sectionTitle}>Box office: {film.box_office}</Text>
          <Text style={styles.sectionTitle}>Durée: {film.duration}</Text>
          <Text style={styles.sectionTitle}>Synopsis: {film.overview}</Text>
          <Text style={styles.sectionTitle}>Lien vers la bande d'annonce: {film.trailer_url}</Text>
          <Text style={styles.sectionTitle}>Saga: {film.saga}</Text>
          <Text style={styles.sectionTitle}>Chronologie: {film.chronology}</Text>
          <Text style={styles.sectionTitle}>Phase: {film.phase}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fond sombre avec une opacité de 80%
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center', // Justifier le texte au centre
    marginVertical: 5, // Espacement vertical entre les lignes
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10, // Espacement en bas du titre
  },
});

export default FilmsDetails;
