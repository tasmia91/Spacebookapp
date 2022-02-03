import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.practiceSheet}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  practiceSheet: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default App;
