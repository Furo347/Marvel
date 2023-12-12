import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGetCharacterById, Item } from '../hooks/useGetCharacterById';

const { width, height } = Dimensions.get('window');
const heroNames: number[] = [
  1, 9, 10, 11, 12, 24, 25, 26, 30, 31, 
  39, 40, 42, 43, 44, 45, 48, 56, 61, 62, 
  72, 74, 75, 79, 80, 86, 88, 92, 96, 99, 
  101, 102, 106, 107, 108, 112, 113, 114,
  115, 121, 128, 131, 133, 134, 138, 143, 145,
  148, 149, 151, 155, 157, 160, 161, 163, 164,
  166, 167, 168, 169, 179, 180, 185, 186, 187,
  189, 190, 191, 196, 197, 198, 201, 202, 206,
  211, 215, 221, 226, 227, 234, 238, 241, 251,
  254, 256, 257, 258, 259, 268, 269, 270, 272,
  273, 274, 275, 279, 280, 281, 282, 283, 285,
  292, 293, 296, 301, 302, 303, 304, 311, 314,
  323, 324, 325, 329, 330, 331, 332, 333, 335,
  336, 338, 339, 343, 344, 345, 346, 350, 358,
  369, 371, 372, 374, 376, 396, 402, 403, 410,
  419, 420, 422, 428, 429, 431, 433, 438, 441,
  443, 447, 452, 456, 462, 470, 473, 475, 477,
  478, 481, 483, 484, 488, 489, 490, 495, 496,
  497, 498, 503, 511, 512, 513, 517, 523, 525,
  527, 529, 530, 536, 537, 547, 560, 566, 567,
  571, 572, 573, 583, 584, 586, 587, 588, 589,
  590, 592, 594, 595, 598, 599, 605, 607, 610,
  612, 618, 619, 620, 621, 622, 623, 624, 625,
  628, 629, 630, 631, 638, 640, 648, 658, 660,
  661, 663, 664, 665, 667, 670, 671, 672, 677,
  679, 682, 684, 694, 698, 700, 703, 705, 708, 
  709, 714, 715, 716, 717, 719, 721, 722, 723, 
  724, 726, 727, 728, 732
];

interface AllgoodCharacterProps {}

export default function AllgoodCharacter(props: AllgoodCharacterProps) {
  const tabGentil: Item[] = [];

  for (const heroName of heroNames) {
    const { data, isLoading } = useGetCharacterById(heroName);
  
    if (data) {
      if (Array.isArray(data)) {
        tabGentil.push(...data);
      } else {
        tabGentil.push(data);
      }
    }
  }

  const navigation = useNavigation<StackNavigationProp<any>>();
  const goToCharacterDetails = (character: Item) => {
    navigation.navigate('CharacterDetails', { character });
  };

  return (
    <View style={styles.scrollViewContent}>
      <FlatList
        data={tabGentil}
        keyExtractor={(item) => item?.id?.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => goToCharacterDetails(item)} >
            <Image style={styles.image} source={{ uri: item?.image?.url }} />
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>{item?.biography?.['full-name'] || ''}</Text>
          <Text style={styles.title}>{item?.name || ''}</Text>
          <Text style={styles.details}>Voir les détails</Text>
        </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

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
