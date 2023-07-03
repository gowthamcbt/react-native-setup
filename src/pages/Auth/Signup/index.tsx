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

const SignUp = () => {
  const {container, form, header, input, btn, btnText,helpText} = styles;
  const navigate = useNavigation<RootStackParamList>();
  const handleSignUpClick = () => {
    navigate.navigate('signin');
  };
  return (
    <SafeAreaView style={container}>
      <View style={form}>
        <Text style={header}>Signup</Text>
        <View>
          <Text>Email</Text>
          <TextInput style={input} />
        </View>
        <View>
          <Text>Username</Text>
          <TextInput style={input} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput secureTextEntry style={input} />
        </View>
        <View>
          <Text>Confirm password</Text>
          <TextInput secureTextEntry style={input} />
        </View>
        <View>
          <TouchableOpacity style={btn}>
            <Text style={btnText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignUpClick}>
             <Text style={helpText}>Already have account ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
    borderBottomLeftRadius:50,
    borderTopRightRadius:50
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
  helpText : {
    marginTop:10,
    fontSize:15
  }
});
