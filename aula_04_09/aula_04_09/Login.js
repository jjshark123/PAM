import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

import styles from './Estilo';

import { verificarLogin } from './Funcoe';

export default function Login({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {

    if (verificarLogin(usuario, senha)) {

      navigation.navigate('Home');

    } else {

      Alert.alert(
        'Acesso negado',
        'Usuário ou senha incorretos!'
      );

    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        🌎 Planeja Fácil
      </Text>

      <Text style={styles.subtitulo}>
        Organize o orçamento da sua viagem
      </Text>

      <Text style={styles.label}>
        Usuário
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.botao}>
        <Button
          title="Entrar"
          onPress={fazerLogin}
        />
      </View>

    </View>
  );
}