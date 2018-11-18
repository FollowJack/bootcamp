import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class LibraryScreen extends React.Component {
  static navigationOptions = {
    title: 'Library',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style = {styles.optionsTitleText}>Reviews
          </Text>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Review 2018.11.18
                </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText:{
    fontSize:16,
    marginLeft:15,
    marginTop:9,
    marginBottom:12
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
