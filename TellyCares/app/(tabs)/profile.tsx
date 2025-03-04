import { StyleSheet, View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4cc9f0', // Blue color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 