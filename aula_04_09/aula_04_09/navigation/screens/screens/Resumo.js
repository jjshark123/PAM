import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '../Estilo';


export default function Resumo({ route, navigation }) {

  const {
    destino,
    dias,
    orcamento
  } = route.params;


  const quantidadeDias = Number(dias);
  const valorOrcamento = Number(orcamento);


  const valorPorDia =
    valorOrcamento / quantidadeDias;


  let mensagem;


  if (valorPorDia < 100) {

    mensagem =
      '💡 Seu orçamento diário está mais enxuto.';

  }

  else if (valorPorDia < 300) {

    mensagem =
      '😊 Seu orçamento diário está em uma faixa intermediária.';

  }

  else {

    mensagem =
      '🌟 Você possui um orçamento diário mais confortável.';

  }


  return (

    <View style={styles.container}>

      <Text style={styles.emoji}>
        🧳
      </Text>

      <Text style={styles.titulo}>
        Sua viagem
      </Text>


      <View style={styles.card}>

        <Text style={styles.info}>
          📍 Destino
        </Text>

        <Text style={styles.valor}>
          {destino}
        </Text>


        <Text style={styles.info}>
          📅 Duração
        </Text>

        <Text style={styles.valor}>
          {quantidadeDias} dias
        </Text>


        <Text style={styles.info}>
          💰 Orçamento total
        </Text>

        <Text style={styles.valor}>
          R$ {valorOrcamento.toFixed(2)}
        </Text>


        <Text style={styles.info}>
          📊 Orçamento por dia
        </Text>

        <Text style={styles.valor}>
          R$ {valorPorDia.toFixed(2)}
        </Text>

      </View>


      <View style={styles.mensagem}>

        <Text style={styles.textoMensagem}>
          {mensagem}
        </Text>

      </View>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.textoBotao}>
          ← ALTERAR VIAGEM
        </Text>

      </TouchableOpacity>

    </View>

  );

}