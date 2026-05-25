import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';
import AppButton from './src/components/AppButton';
import ResultCard from './src/components/ResultCard';

export default function App() {
  // Inicializando como string vazia para melhor controle dos inputs
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState(null);
  
  function VERIFICAR() {
    // Converte os textos para números flutuantes
    const precoEtanol = parseFloat(etanol);
    const precoGasolina = parseFloat(gasolina);

    // Validação simples para não dividir por zero ou campos vazios
    if (!precoEtanol || !precoGasolina) {
      return;
    }

    var porcentagem = ((precoEtanol / precoGasolina) * 100).toFixed(1);
    let recomendacao;
    
    // Correção da regra: Menos que 70% vale Etanol
    if (porcentagem < 70) {
      recomendacao = "Etanol";
    } else {
      recomendacao = "Gasolina";
    }
    
    setResultado({ recomendacao, porcentagem });
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />
      <View style={styles.textop}>
        <Text style={styles.titleTop}>Álcool ou Gasolina</Text>
      </View>
      
      <Image 
        style={styles.logo}
        source={require('./src/screens/ipiranga-logo.png')}
      />
      
      <Text style={styles.texto}>Preço do Etanol (R$):</Text>
      <TextInput 
        style={styles.input}
        placeholderTextColor='lightgray'
        keyboardType='numeric'
        onChangeText={setEtanol}
        value={etanol}
        placeholder="Ex: 3.89"
      />
      
      <Text style={styles.texto}>Preço da Gasolina (R$):</Text>
      <TextInput 
        style={styles.input}
        placeholderTextColor='lightgray'
        keyboardType='numeric'
        onChangeText={setGasolina}
        value={gasolina}
        placeholder="Ex: 5.79"
      />
      
      {/* Correção: onPress com "o" minúsculo */}
      <AppButton
        title="VERIFICAR VANTAGEM"
        onPress={VERIFICAR}
      />
      
      {/* Só renderiza o card se houver um resultado */}
      {resultado && (
        <ResultCard 
          recomendacao={resultado.recomendacao}
          porcentagem={resultado.porcentagem}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80, // Espaço para o cabeçalho não cobrir o conteúdo
  },
  titleTop: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 60,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
    width: '75%',
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: '75%',
    height: 45,
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  textop: {
    backgroundColor: 'blue',
    height: 60,
    width: '100%',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 125,
    margin: 20,
    resizeMode: 'contain',
  },
});