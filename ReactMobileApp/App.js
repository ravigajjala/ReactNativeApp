/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commit: {
    margin: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  item: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold'
  },
  link: {
    color: 'blue'
  }
});

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      commits: []
    }
  }



  componentDidMount = () => {
    fetch('https://api.github.com/repos/facebook/facebook-ios-sdk/commits?per_page=50&sort=committer-date&order=asc', {
      method: 'GET'
    }).then(response => response.json())
      .then((responseJson) => {
        this.setState({
          commits: responseJson
        })
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        {this.state.commits.length ? this.state.commits.map((commit, index) => {
          return (
            <View style={styles.commit} key={'commit'+index}>
              <Text style={styles.item}>
                <Text style={styles.label}>Author:</Text> {commit?.commit?.author?.name}
              </Text>
              <Text style={styles.item}>
                <Text style={styles.label}>Commit Hash: </Text>
                <Text style={styles.link} onPress={() => Linking.openURL(commit.html_url)}>{commit.html_url}</Text>
              </Text>
              <Text style={styles.item}>
                <Text style={styles.label}>Commit Message:</Text> {commit.commit.message}
              </Text>
            </View>
          )
        }) : <Text></Text>}
      </ScrollView>
    )
  }
}

export default App;
