/* eslint-disable no-alert */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {isEmpty, size} from 'lodash';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../../firebase-config';

//Import Utilities.
import Colors from '../../Utilities/Colors';
import {validaremail} from '../../Utilities/Utils';
import {validarpassword} from '../../Utilities/Utils';
import {SafeAreaView} from 'react-native';

export default function Register() {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [repeatpassword, setrepeatpassword] = useState('');
  const [show, setshow] = useState(true);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function CrearCuenta() {
    if (isEmpty(email) || isEmpty(password) || isEmpty(repeatpassword)) {
      alert('Todos los campos son obligatorios.');
    } else if (!validaremail(email)) {
      alert('Correo no es válido.');
    } else if (password !== repeatpassword) {
      alert('Las contraseñas deben ser iguales.');
    } else if (size(password) < 8) {
      alert('Las contraseñas deben ser de al menos 8 carácteres.');
    } else if (!validarpassword(password)) {
      alert(
        'Las contraseñas deben ser contener como minimo un numero , una letra minuscula y una letra mayuscula',
      );
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log('cuenta creada');
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('home');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.top}>
            <Text style={styles.topText}>REGISTRARME</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.email}>
              <View style={styles.space}>
                <Icon name="account" type="material-community" size={28} />
                <TextInput
                  placeholder="Usuario"
                  style={styles.input}
                  secureTextEntry={false}
                  onChangeText={text => {
                    setemail(text);
                  }}
                  value={email}
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={styles.space}>
                <Icon name="lock" type="material-community" size={28} />
                <TextInput
                  placeholder="Contraseña"
                  style={styles.input}
                  secureTextEntry={show}
                  onChangeText={text => {
                    setpassword(text);
                  }}
                  value={password}
                />
                <Icon
                  name={show ? 'eye-outline' : 'eye-off-outline'}
                  type="material-community"
                  size={28}
                  onPress={() => setshow(!show)}
                />
              </View>
            </View>
            <View style={styles.password}>
              <View style={styles.space}>
                <Icon name="lock" type="material-community" size={28} />
                <TextInput
                  placeholder="Confirmar contraseña"
                  style={styles.input}
                  secureTextEntry={show}
                  onChangeText={text => {
                    setrepeatpassword(text);
                  }}
                  value={repeatpassword}
                />
                <Icon
                  name={show ? 'eye-outline' : 'eye-off-outline'}
                  type="material-community"
                  size={28}
                  onPress={() => setshow(!show)}
                />
              </View>
            </View>
            <View style={styles.onRegister}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => CrearCuenta()}>
                <Text style={styles.text}>REGISTRAR</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ViewBack}>
            <TouchableOpacity
              style={styles.onBack}
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.textback}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 18,
  },
  card: {
    width: 325,
    height: 455,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 18,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  top: {
    width: 325,
    height: 60,
    backgroundColor: Colors.PRIMARY,
  },
  topText: {
    color: Colors.WHITE,
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    fontSize: 24,
    marginTop: 18,
    alignSelf: 'center',
  },
  bottom: {
    paddingHorizontal: 15,
  },
  space: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  email: {
    width: 291,
    marginTop: 6,
    alignSelf: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  password: {
    width: 291,
    flexDirection: 'row',
    marginTop: 6,
    alignSelf: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  input: {
    width: '78%',
    height: 29,
    marginLeft: 7,
  },
  onRegister: {
    marginTop: 66,
    alignItems: 'center',
  },
  button: {
    width: 154,
    height: 37,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: Colors.GREEN,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  ViewBack: {
    width: 325,
    height: 55,
    marginTop: 43,
    backgroundColor: Colors.SEMIWHITE,
  },
  onBack: {
    marginTop: 3,
    backgroundColor: Colors.BACKGROUNDCOLOR,
    borderBottomColor: Colors.SECONDARY,
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  textback: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.SECONDARY,
    paddingTop: 4,
  },
});
