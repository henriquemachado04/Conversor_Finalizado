import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput } from 'react-native';
import { Header } from './components/Header';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Real', Value: '1' },
  { label: 'Dólar', Value: '2' },
  { label: 'Euro', Value: '3' },
  { label: 'Iene', Value: '4' },
  { label: 'Libra', Value: '5' },
  { label: 'Lira', Value: '6' }
]

function HomeTela({ navigation }) {
  return (
    <View style={styles.background}>
      <Header/>
        <div style={styles.primeiros}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Conversor')}>
              <Text style={styles.moeda}>Conversor</Text>
              <div/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Historico')}>
              <Text style={styles.moeda}>Histórico</Text>
              <div/>
          </TouchableOpacity>
      </div>
      <div style={styles.outros}>
          <TouchableOpacity style={styles.cardMoe} onPress={() => navigation.navigate('Conversor')}>
              <div/>
              <Text style={styles.nome}>Moedas Disponiveis</Text>
              <Text style={styles.descricao}>R$ ----------------- REAL</Text>
              <Text style={styles.descricao}>£ ------------------ LIBRA</Text>
              <Text style={styles.descricao}>€ ------------------ EURO</Text>
              <Text style={styles.descricao}>US$ ---------------- DOLAR</Text>
              <Text style={styles.descricao}>₤ ------------------ LIRA</Text>
          </TouchableOpacity>
      </div>
    </View>
  )
}

function ConversorTela() {
  return (
    <View style={styles.background}>
      <Header/>
      <Text style={styles.title}>Conversor</Text>
      
      <div style={styles.box}>
        <div style={styles.boxOg}>
          <Dropdown style={styles.lista} data={data} labelField={'label'} valueField={'value'}></Dropdown>
          <TextInput style={styles.valorOg} keyboardType='numeric'/>
        </div>
        <Image style={styles.seta} source={require("./assets/seta-para-baixo.png")}/>
        <div style={styles.boxOg}>
          <Dropdown style={styles.lista} data={data} labelField={'label'} valueField={'value'}></Dropdown>
          <Text style={styles.valorOg}/>
        </div>
        <TouchableOpacity style={styles.converter}>Converter</TouchableOpacity>
      </div>
      <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Home')}>Home</TouchableOpacity>
    </View>
  )
}

function HistoricoTela({ navigation }) {
  const historicoData = [
    { moeda: 'R$', valor: '100,00', data: '01/01/2024' },
    { moeda: '€', valor: '50,00', data: '02/01/2024' },
    { moeda: 'US$', valor: '200,00', data: '03/01/2024' },
    // Adicione mais dados conforme necessário
  ];

  return (
    <View style={styles.background}>
      <Header/>
      <Text style={styles.title}>Histórico</Text>
      <View style={styles.content}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Moeda</Text>
          <Text style={styles.tableHeaderText}>Valor</Text>
          <Text style={styles.tableHeaderText}>Data</Text>
        </View>
        {historicoData.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.moeda}</Text>
            <Text style={styles.tableCell}>{item.valor}</Text>
            <Text style={styles.tableCell}>{item.data}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Home')}>Home</TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTela}/>
        <Stack.Screen name="Conversor" component={ConversorTela}/>
        <Stack.Screen name="Historico" component={HistoricoTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#e98b1b',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  tableHeaderText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    color: '#101f54',
    fontSize: 18,
    width: '33%', // Define a largura de cada célula
  },
  background: {
    backgroundColor: '#101f54',
    width: 414,
    height: 896
  },
  lista: {
    backgroundColor: '#ffffff',
    width: 140,
    height: 40,
    borderRadius: 10,
    color: "#e98b1b"
  },
  primeiros: {
    justifyContent: "center",
    marginLeft: 50,
    marginTop: 50
  },
  outros: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 30
  },
  cardMoe: {
    backgroundColor: '#ffca2c',
    width: 350,
    height: 400,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  card: {
    backgroundColor: '#ffca2c',
    width: 300,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    display: "grid",
  },
  moeda: {
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 40,
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -4, height: 0 },
    textAlign: "center"
  },
  nome: {
    color: "#ffffff",
    fontSize: 30,
    marginTop: 10,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -4, height: 0 }
  },
  descricao: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 10,
    padding: 15,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -4, height: 0 }
  },
  botaoHistorico: {
    backgroundColor: "#e98b1b",
    width: 170,
    height: 40,
    border: 'none',
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: 'sans-serif',
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 115
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 10,
    textAlign: "center",
    textShadowColor: "#e98b1b",
    textShadowRadius: 1,
    textShadowOffset: { width: -4, height: 0 },
  },
  box: {
      width: 350,
      height: 300,
      backgroundColor: "#ffca2c",
      margin: 'auto',
      marginTop: 20,
      borderRadius: 20,
  },
  boxOg: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: 20
  },
  valorOg: {
      width: 140,
      height: 40,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      color: "#e98b1b",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: 33,
      textAlign: "center"
  },
  seta: {
      width: 50,
      height: 50,
      margin: "auto",
      marginTop: 25
  },
  converter: {
      backgroundColor: "#e98b1b",
      width: 170,
      height: 40,
      border: 'none',
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 30,
      borderRadius: 20,
      marginTop: 30,
      marginLeft: 95,
      fontFamily: 'sans-serif',
      textAlign: 'center',
  },
  content: {
    width: 400,
    height: 500,
    backgroundColor: "#ffca2c",
    margin: 'auto',
    marginTop: 20,
    borderRadius: 20,
  },
})
export default App;