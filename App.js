import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-toast-message';

const information = [
  {
      id: 1,
      name: "BATULANON, RIZA",
      place: "Tagustusan, Balilihan"
  },
  {
      id: 2,
      name: "BETASA, MIARAFE",
      place: "Mahayag, Catigbian"
  },
  {
      id: 3,
      name: "CUMAHIG, JENMARIE",
      place: "Libertad, Tubigon"
  },
  {
      id: 4,
      name: "GARCIA, ROGEL",
      place: "Boyog Norte, Balilihan"
  },
  {
      id: 5,
      name: "JAUM, MARIE ",
      place: "Poblacion, Catigbian"
  },
  {
      id: 6,
      name: "LANSANG, PEARL",
      place: "San Roque, Balilihan"
  },
  {
      id: 7,
      name: "LIPARTO, MONALIZA",
      place: "Boyog Proper, Balilihan"
  },
  {
      id: 8,
      name: "LUMANTAS, DESERRIE",
      place: "Hagbuaya, Catigbian"
  },
  {
      id: 9,
      name: "QUISQUIRIN, JHANNEL",
      place: "Del Rosario, Balilihan"
  },
  {
      id: 10,
      name: "REQUILLO, FLORA",
      place: "Boyog Norte, Balilihan"
  },
  {
      id: 11,
      name: "TAMAYO, LORAINE",
      place: "Cambuac Sur, Sikatuns"
  },
  {
      id: 12,
      name: "VILLOREJO, JAQUELINE",
      place: "Australia, Maribojoc"
  },
];


const getReciprocatedInitials = (name) => {
  const nameParts = name.split(' ');
  const reversedInitials = nameParts.map((part) => part.charAt(0)).reverse().join('');
  return reversedInitials.toUpperCase();
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <UserAvatar size={50} name={getReciprocatedInitials(item.name)} style={{ backgroundColor: '#FF1493' }} />
    <Text style={[styles.title, { color: textColor }]}>{item.name}{'\n'}<Text style={{ fontWeight: 200 }}>{item.place}</Text></Text>
    <Icon
      style={{ marginRight: 10, position: 'absolute', marginLeft: 350 }}
      name="dots-three-horizontal"
      size={30}
      color="#000"
      onPress={() => showNotification(item.name)}
    />
  </TouchableOpacity>
);

const showNotification = (name) => {
  Toast.show({
    type: 'info',
    position: 'top',
    text1: 'HELLO !',
    text2: `${name}`,
  });
};

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#00000' : '#ffffff';
    const color = item.id === selectedId ? 'blue' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={information}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedId}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  place: {},
});

export default App;
