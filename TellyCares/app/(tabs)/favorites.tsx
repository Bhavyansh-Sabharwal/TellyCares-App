import { StyleSheet, View, Text } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c5cff', // Purple color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 