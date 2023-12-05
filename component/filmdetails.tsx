import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Film } from "../hooks/useGetFilmByName";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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

  const handleTrailerPress = () => {
    Linking.openURL(film.trailer_url);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: film.cover_url }}
      />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <ScrollView>
          <Text style={styles.title}>{film.title}</Text>
          <View style={styles.iconText}>
            <FontAwesome name="ticket" size={16} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.sectionTitle}>{film.box_office}</Text>
          </View>
          <View style={styles.iconText}>
            <FontAwesome name="calendar" size={16} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.sectionTitle}>{formattedDate}</Text>
          </View>
          <View style={styles.iconText}>
            <FontAwesome name="pencil" size={16} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.sectionTitle}>{film.directed_by}</Text>
          </View>
          <View style={styles.iconText}>
            <FontAwesome name="hourglass" size={16} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.sectionTitle}>{film.duration}</Text>
          </View>
          <TouchableOpacity style={styles.linkContainer} onPress={handleTrailerPress}>
            <FontAwesome name="link" size={16} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.sectionTitle}>Voir la bande d'annonce</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>{film.overview}</Text>
          <Text style={styles.sectionTitle}>Saga: {film.saga}</Text>
          <Text style={styles.sectionTitle}>Chronologie: {film.chronology}</Text>
          <Text style={styles.sectionTitle}>Phase: {film.phase}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Reduced opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
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
    marginBottom: 10,
    textAlign: 'center',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default FilmsDetails;
