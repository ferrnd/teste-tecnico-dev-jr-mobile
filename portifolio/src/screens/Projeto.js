import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Habilidades() {
  const abrirGithub = () => {
    Linking.openURL('https://github.com/ferrnd/book-club-mobile-backend');
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Ionicons name="code-slash" size={50} color="black" style={{ marginBottom: 10 }} />
        
        <Text style={styles.titulo}>Meus Projetos</Text>
        
        <Text style={styles.subtitulo}>Backend Book Club:</Text>
        
        <TouchableOpacity style={styles.botaoLink} onPress={abrirGithub}>
          <Text style={styles.textoLink}>Ver no GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  caixa: {
    justifyContent: "center",
    alignItems: "center",
    width: 320, // Um pouco mais largo para o link caber bem
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
  },
  titulo: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  botaoLink: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoLink: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});