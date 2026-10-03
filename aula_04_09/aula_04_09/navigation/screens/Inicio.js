import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../Estilo';


export default function Inicio({ navigation }) {

  const [destino, setDestino] = useState('');
  const [dias, setDias] = useState('');
  const [orcamento, setOrcamento] = useState('');


  function continuar() {

    navigation.navigate(
      'Resumo',
      {
        destino: destino,
        dias: dias,
        orcamento: orcamento
      }
    );

  }


  return (

    <View style={styles.container}>

      <Text style={styles.emoji}>
        ✈️
      </Text>

      <Text style={styles.titulo}>
        Planeje sua Viagem
      </Text>

      <Text style={styles.subtitulo}>
        Organize sua próxima aventura
      </Text>


      <Text style={styles.label}>
        📍 Para onde você vai?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Rio de Janeiro"
        value={destino}
        onChangeText={setDestino}
      />


      <Text style={styles.label}>
        📅 Quantos dias?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 5"
        keyboardType="numeric"
        value={dias}
        onChangeText={setDias}
      />


      <Text style={styles.label}>
        💰 Qual é o seu orçamento?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 2000"
        keyboardType="numeric"
        value={orcamento}
        onChangeText={setOrcamento}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={continuar}
      >

        <Text style={styles.textoBotao}>
          CONTINUAR →
        </Text>

      </TouchableOpacity>

    </View>

  );

}