import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {Icon} from '@rneui/themed';

const VdsAcordion = ({style, children, title, bold}) => {
  const [showOption, setShowOption] = useState(false);
  console.log(style);
  const onSelectdItem = () => {
    setShowOption(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <View style={styles.text}>
          <TouchableOpacity onPress={() => setShowOption(!showOption)}>
            <Text style={styles.textacordion}>Descubre</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowOption(!showOption)}>
            <Icon
              name={showOption ? 'chevron-up' : 'chevron-down'}
              type={'material-community'}
              style={styles.iconacordion}
              size={36}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showOption && (
        <View style={styles.content}>
          <View>
            <TouchableOpacity onPress={() => onSelectdItem()} />
            {children}
          </View>
        </View>
      )}
    </View>
  );
};

export default VdsAcordion;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderSelectStyle: 'solid',
    borderColor: '#E6E6E6',
    flexDirection: 'column',
  },
  options: {
    width: '100%',
    height: 108,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 49,
  },
  text: {
    width: '90%',
  },
  content: {
    paddingBottom: 20,
    marginLeft: 5,
    marginRight: 25,
  },
  textacordion: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 14,
  },
  iconacordion: {
    marginRight: 35,
  },
});
