/* eslint-disable no-alert */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {isEmpty, size} from 'lodash';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

//Import Firebase
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../../firebase-config';

//Import Utilities.
import Colors from '../../Utilities/Colors';
import {validaremail} from '../../Utilities/Utils';
import {validarpassword} from '../../Utilities/Utils';

export default function Register() {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [show, setshow] = useState(true);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const IniciarSesion = () => {
    if (isEmpty(email) || isEmpty(password)) {
      alert('Debe ingresar los valores de email y Password');
    } else if (!validaremail(email)) {
      alert('Ingrese un correo válido');
    } else if (size(password) < 8) {
      alert('Ingrese un correo válido');
    } else if (!validarpassword(password)) {
      alert('Ingrese una contraseña válida');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log('Bienvenido a su cuenta');
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('home');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.top}>
            <Text style={styles.topText}>INICIAR SESIÓN</Text>
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
            <View style={styles.onRegister}>
              <Pressable style={styles.button} onPress={() => IniciarSesion()}>
                <Text style={styles.text}>INGRESAR</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.ViewBack}>
            <TouchableOpacity
              style={styles.onBack}
              onPress={() => navigation.navigate('register')}>
              <Text style={styles.textback}>Registrarme</Text>
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
    marginHorizontal: 40,
  },
  card: {
    width: 281,
    height: 273,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 18,
    marginTop: 183,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  top: {
    width: 281,
    height: 64,
    backgroundColor: Colors.PRIMARY,
  },
  topText: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 24,
    marginTop: 18,
    alignSelf: 'center',
  },
  bottom: {
    paddingHorizontal: 28,
  },
  space: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  email: {
    width: 224,
    marginTop: 18,
    alignSelf: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  password: {
    width: 224,
    marginTop: 18,
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  input: {
    width: '70%',
    height: 29,
    marginLeft: 12,
  },
  onRegister: {
    marginTop: 32,
    alignItems: 'center',
  },
  button: {
    width: 112,
    height: 28,
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: Colors.GREEN,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: '700',
    color: Colors.WHITE,
  },
  ViewBack: {
    width: 281,
    height: 40,
    marginTop: 13,
    backgroundColor: Colors.SEMIWHITE,
  },
  onBack: {
    marginTop: 3,
    backgroundColor: Colors.BACKGROUNDCOLOR,
    borderBottomColor: Colors.SECONDARY,
    borderBottomWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textback: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.SECONDARY,
    paddingTop: 12,
  },
});
