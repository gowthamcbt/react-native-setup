import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';

const SignIn = ({}) => {
  const navigate = useNavigation<RootStackParamList>();
  const handleLoginClick = () => {
    navigate.navigate('signup');
  };
  const {container, form, header, input, btn, btnText, helpText} = styles;
  return (
    <SafeAreaView style={container}>
      <View style={form}>
        <Text style={header}>Gowtham</Text>
        <View>
          <Text>Username</Text>
          <TextInput style={input} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput secureTextEntry style={input} />
        </View>
        <View>
          <TouchableOpacity style={btn} onPress={handleLoginClick}>
            <Text style={btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={helpText}>Create account ?</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228cdc',
    justifyContent: 'center',
    padding: 30,
  },
  form: {
    padding: 30,
    backgroundColor: '#ffff',
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  header: {
    color: '#3b0282',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#228cdc',
    borderWidth: 1,
    borderRadius: 5,
    color:'black',
    fontSize:20
  },
  btn: {
    backgroundColor: '#228cdc',
    padding: 15,
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 18,
  },
  helpText: {
    marginTop: 10,
    fontSize: 15,
  },
});
