import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.itemOne}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.itemTwo}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.itemThree}>
        <Text>Item 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  itemOne:{
    flex: 1,
    backgroundColor: 'red'
  },
  itemTwo:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  itemThree:{
    flex: 1,
    backgroundColor: 'blue'
  },
});

export default App;
