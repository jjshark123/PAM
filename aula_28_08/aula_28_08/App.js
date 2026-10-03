import { View, Text, FlatList } from 'react-native';
import styles from './Estilo';

export default function App() {
  const usuarios = [
    { id: '1', nome: 'Bolo', img: '84358734yt' },
    { id: '200', nome: 'Pudim' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Receitas da VoVó!</Text>

      <Text style={styles.subtitulo}>Escolha:</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}