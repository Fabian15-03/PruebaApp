import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

//Importando Componentes
import Colors from '../../Utilities/Colors';
import Acordion from '../../Components/Acordion';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.up}>
          <View style={styles.opciones}>
            <Text style={styles.upText}>Opciones</Text>
            <Icon
              name="exit-to-app"
              type="material-community"
              size={32}
              onPress={() => navigation.navigate('login')}
              style={styles.icon}
            />
          </View>
          <View style={styles.menu}>
            <View>
              <Image
                source={require('../../../assets/Carrito.jpeg')}
                style={styles.img}
                resizeMode={'contain'}
              />
              <Text style={styles.textMenu}>Carrito</Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/Compras.png')}
                style={styles.img}
                resizeMode={'contain'}
              />
              <Text style={styles.textMenu}>Compras</Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/Salud.png')}
                style={styles.img}
                resizeMode={'contain'}
              />
              <Text style={styles.textMenu}>Salud</Text>
            </View>
          </View>
          <View style={styles.menu}>
            <View>
              <Image
                source={require('../../../assets/Globo.png')}
                style={styles.img}
                resizeMode={'contain'}
              />
              <Text style={styles.textMenu}>Aniversario</Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/Telefono.png')}
                style={styles.img}
                resizeMode={'contain'}
              />
              <Text style={styles.textMenu}>Whatsapp</Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/Envio.png')}
                style={styles.img}
                resizeMode={'contain'}
              />
              <Text style={styles.textMenu}>Envio</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View>
            <Acordion>
              <Text>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                est??ndar de las industrias desde el a??o 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido us??
                una galer??a de textos y los mezcl?? de tal manera que logr?? hacer
                un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino
                que tambien ingres?? como texto de relleno en documentos
                electr??nicos, quedando esencialmente igual al original. Fue
                popularizado en los 60s con la creaci??n de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente
                con software de autoedici??n, como por ejemplo Aldus PageMaker,
                el cual incluye versiones de Lorem Ipsum.
              </Text>
            </Acordion>
            <Acordion>
              <Text>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                est??ndar de las industrias desde el a??o 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido us??
                una galer??a de textos y los mezcl?? de tal manera que logr?? hacer
                un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino
                que tambien ingres?? como texto de relleno en documentos
                electr??nicos, quedando esencialmente igual al original. Fue
                popularizado en los 60s con la creaci??n de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente
                con software de autoedici??n, como por ejemplo Aldus PageMaker,
                el cual incluye versiones de Lorem Ipsum.
              </Text>
            </Acordion>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

//Generando Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.BACKGROUNDCOLOR,
  },
  up: {
    height: 320,
    backgroundColor: '#F9F9F9',
  },
  upText: {
    fontSize: 18,
    marginTop: 22,
    marginLeft: 10,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 27,
    marginHorizontal: 39,
    justifyContent: 'space-between',
  },
  img: {
    width: 62,
    height: 62,
    borderRadius: 31,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 31,
    },
    shadowOpacity: 0.25,
  },
  textMenu: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  Acordion: {
    backgroundColor: Colors.SEMIWHITE,
  },
  opciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 20,
  },
});
