/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import prompt from 'react-native-prompt-android';
// import Realm from 'realm';
import GridView from 'react-native-super-grid';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "TODO Lists"
    }
  }

  state = {
    items: [{listName: "Temp"}]
  }

  addList = () => {
    // prompt(
    //   'Enter name', 'Enter the new list name',
    //   [
    //     {
    //       text: 'Cancel',
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: (listName) => listName.length === 0 ? this.addList() : this.writeToRealm(listName),
    //     },
    //   ],
    //   {}
    // );
  }

  goToList = (item) => {

  }

  itemRenderer = (item) => {
    // if (item !== 0) {
      return (
        <TouchableOpacity onPress={() => this.goToList(item)}>
          <View style={[styles.itemContainer]}>
            <Text style={styles.itemName}>{item.listName}</Text>
          </View>
        </TouchableOpacity>
      );
    // }

    // return (
    //   <TouchableOpacity onPress={this.addList}>
    //     <View style={[styles.newContainer]}>
    //       <Text style={styles.itemName}>New Item</Text>
    //     </View>
    //   </TouchableOpacity>
    // );

  }

  render() {
    console.log(this.state.items)
    return (
      <View style={styles.container}>
        <GridView
          itemDimension={110}
          items={this.state.items}
          renderItem={this.itemRenderer}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 16
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: '#3498db'
  },
  newContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 150,
    backgroundColor: '#9b59b6'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
