import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './Estilo';

import { calcularConsumo } from './Funcoe';

export default function Home() {

  const [potencia, setPotencia] = useState('');
  const [horas, setHoras] = useState('');
  const [dias, setDias] = useState('');

  const [resultado, setResultado] = useState('');

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        ⚡ Calculadora de Energia
      </Text>

      <Text style={styles.subtitulo}>
        Descubra o consumo de um aparelho
      </Text>


      <Text style={styles.label}>
        Potência do aparelho (Watts)
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 100"
        keyboardType="numeric"
        value={potencia}
        onChangeText={setPotencia}
      />


      <Text style={styles.label}>
        Horas de uso por dia
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 5"
        keyboardType="numeric"
        value={horas}
        onChangeText={setHoras}
      />


      <Text style={styles.label}>
        Quantidade de dias
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 30"
        keyboardType="numeric"
        value={dias}
        onChangeText={setDias}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          calcularConsumo(
            potencia,
            horas,
            dias,
            setResultado
          )
        }
      >

        <Text style={styles.textoBotao}>
          CALCULAR CONSUMO
        </Text>

      </TouchableOpacity>


      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </View>

  );
}