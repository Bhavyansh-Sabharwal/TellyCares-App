import { StyleSheet, View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9f1c', // Orange color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
