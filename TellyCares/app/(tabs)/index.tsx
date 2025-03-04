import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useColorScheme } from '../../hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={styles.container}>
      

      {/* Welcome Section */}
      <View style={[styles.welcomeSection]}>
        <View style={[styles.card, styles.profileContainer]}>
          <View style={styles.profileCircle}>
            <Ionicons name="person" size={40} color="#666" />
          </View>
          <View style={styles.profileDetails}>
            <Text style={[styles.nameText, colorScheme === 'dark' && styles.darkText]}>
              Name_Here
            </Text>
            <Text style={[styles.ageText, colorScheme === 'dark' && styles.darkText]}>
              Age: 25
            </Text>
          </View>
        </View>
      </View>

      {/* Flags Section */}
      <View style={styles.flagsSection}>
        <IconSymbol size={24} name="flag.fill" color="#F27B2D" />
        <Text style={styles.flagsText}>Flags</Text>
      </View>

      {/* Dashboard Grid */}
      <View style={styles.gridContainer}>
        {/* Quick Stats Cards */}
        <View style={[styles.card, colorScheme === 'dark' && styles.darkCard]}>
          <Text style={[styles.cardTitle, colorScheme === 'dark' && styles.darkText]}>
            Flags
          </Text>
          <Text style={[styles.cardValue, colorScheme === 'dark' && styles.darkText]}>
            Medication missing...
          </Text>
        </View>

        <View style={[styles.card, colorScheme === 'dark' && styles.darkCard]}>
          <Text style={[styles.cardTitle, colorScheme === 'dark' && styles.darkText]}>
            Tasks finished...
          </Text>
          <View style={styles.tasksList}>
            <View style={[styles.activityItem, colorScheme === 'dark' && styles.darkActivityItem]}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={[styles.activityText, colorScheme === 'dark' && styles.darkText]}>
                Morning medication
              </Text>
            </View>
            <View style={[styles.activityItem, colorScheme === 'dark' && styles.darkActivityItem]}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={[styles.activityText, colorScheme === 'dark' && styles.darkText]}>
                Evening medication
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Activity Section */}
        <View style={[styles.wideCard, colorScheme === 'dark' && styles.darkCard]}>
          <Text style={[styles.cardTitle, colorScheme === 'dark' && styles.darkText]}>
            Recent Activity
          </Text>
          <View style={styles.activityList}>
            <View style={[styles.activityItem, colorScheme === 'dark' && styles.darkActivityItem]}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={[styles.activityText, colorScheme === 'dark' && styles.darkText]}>
                Completed x medication
              </Text>
            </View>
            <View style={[styles.activityItem, colorScheme === 'dark' && styles.darkActivityItem]}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={[styles.activityText, colorScheme === 'dark' && styles.darkText]}>
                Completed y medication
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeSection: {
    padding: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  gridContainer: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wideCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkCard: {
    backgroundColor: '#1c1c1c',
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  activityList: {
    marginTop: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    gap: 10,
  },
  darkActivityItem: {
    backgroundColor: '#2c2c2c',
  },
  activityText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  flagsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 8,
  },
  flagsText: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileDetails: {
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ageText: {
    fontSize: 16,
    color: '#666',
  },
  tasksList: {
    marginTop: 10,
  },
});
