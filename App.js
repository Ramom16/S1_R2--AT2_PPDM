import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const salvarUsuario = () => {
    Alert.alert("Sucesso", "Registro salvo com sucesso!");
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Cadastro de usuário</Text>

      <View style={styles.card}>

        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} placeholder="Digite seu telefone" />

        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput style={styles.input} placeholder="DD/MM/AAAA" />

        <Pressable style={styles.botao} onPress={salvarUsuario}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </Pressable>

      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5E6C8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3F2F',
    marginBottom: 20,
  },

  card: {
    width: '90%',
    height: '70%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6C7A1',
    borderRadius: 12,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,

    alignItems: 'center'
  },

  label: {
    width: '95%',
    fontSize: 16,
    color: '#4B3F2F',
    marginTop: 10,
  },

  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#D6C7A1',
    borderRadius: 6,
    padding: 8,
    marginTop: 5,
    backgroundColor: '#FAF7EF'
  },

  botao: {
    marginTop: 20,
    backgroundColor: '#C9A227',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }

});