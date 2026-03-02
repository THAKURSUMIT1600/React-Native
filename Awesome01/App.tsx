import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
type RootStackParamList = {
  Home: undefined;
  Profile: { username: string; age: number };
};

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.fullScreen}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingTop: 20, paddingBottom: 0, flexGrow: 1 },
          ]}
        >
          <View style={styles.headerCard}>
            <Text style={styles.title}>🏠 Home Screen</Text>
            <Text style={styles.subtitle}>Welcome to the app!</Text>
          </View>

          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.body}>
              This is a sample React Native app with navigation.
            </Text>
            <Text style={styles.body}>
              You can navigate between screens using the buttons below.
            </Text>
          </View>

          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>Features</Text>
            <Text style={styles.body}>• Smooth navigation between screens</Text>
            <Text style={styles.body}>• Responsive design for mobile</Text>
            <Text style={styles.body}>• Clean and modern UI</Text>
            <Text style={styles.body}>• TypeScript support</Text>
          </View>

          <View style={styles.buttonCard}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() =>
                navigation.navigate('Profile', { username: 'Sumit', age: 22 })
              }
            >
              <Text style={styles.primaryButtonText}>Go to Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function ProfileScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, 'Profile'>;
}) {
  const navigation = useNavigation<any>();
  const { username, age } = route.params;

  return (
    <View style={styles.fullScreen}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingTop: 20, paddingBottom: 0, flexGrow: 1 },
          ]}
        >
          <View style={styles.headerCard}>
            <Text style={styles.title}>👤 Profile Screen</Text>
            <Text style={styles.subtitle}>User Information</Text>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>👨‍💻</Text>
            </View>
            <Text style={styles.name}>{username}</Text>
            <Text style={styles.age}>{age} years old</Text>
          </View>

          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <Text style={styles.body}>📧 sumit@example.com</Text>
            <Text style={styles.body}>📍 India</Text>
          </View>

          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>Bio</Text>
            <Text style={styles.body}>
              A developer passionate about React Native and creating amazing
              mobile experiences.
            </Text>
          </View>

          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>JavaScript</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>TypeScript</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>React</Text>
              </View>
              <View style={styles.skillTag}>
                <Text style={styles.skillText}>React Native</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <Text style={styles.body}>• 5 years of software development</Text>
            <Text style={styles.body}>• Mobile app development</Text>
            <Text style={styles.body}>• Web development</Text>
          </View>

          <View style={styles.buttonCard}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  screenOptions: {
    headerStyle: {
      backgroundColor: '#fbf5f5',
    },
    headerTintColor: '#000000',
    statusBarStyle: 'dark',
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#887272" barStyle="dark-content" />
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#ababb1',
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  contentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  buttonCard: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#374151',
  },
  body: {
    fontSize: 16,
    marginBottom: 8,
    color: '#6B7280',
    lineHeight: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    fontSize: 64,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  age: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#EF4444',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#6B7280',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
