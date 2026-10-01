import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{
          uri: 'https://www.pngwing.com/pt/search?q=livro'
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text>Biblioteca de Livros!</Text>

      <Text>Genero</Text>

      <TextInput
        placeholder="Nome do filme"
        style={styles.input}
      />

      <Text>Autor</Text>

      <TextInput
        placeholder="nome do autor"
        secureTextEntry={true}
        style={styles.input}
      />

      <StatusBar style="auto" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#8db5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
