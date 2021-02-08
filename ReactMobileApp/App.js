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
  Text
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      commits: []
    }
  }



  componentDidMount = () => {
    fetch('https://api.github.com/repos/facebook/facebook-ios-sdk/commits', {
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
        <Text>{JSON.stringify(this.state.commits)}</Text>
      </ScrollView>
    )
  }
}

export default App;