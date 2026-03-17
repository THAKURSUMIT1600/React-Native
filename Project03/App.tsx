import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  Linking,
  Pressable,
} from 'react-native';
import Svg, { Circle, Rect, Text as SvgText } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './ThemeContext';

function Box({ color, elevated = false }) {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  return (
    <View
      style={[
        elevated ? styles.boxElevated : styles.box,
        { backgroundColor: color },
      ]}
    >
      <Text style={[styles.boxText, { color: textColor }]}>{color}</Text>
    </View>
  );
}

function Places() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  return (
    <View style={styles.placesStyle}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.imageStyle}
      />
      <Text style={[styles.placeTitle, { color: textColor }]}>
        Pink City Jaipur
      </Text>
      <Text style={[styles.placeTime, { color: textColor }]}>12 Min Ago</Text>
    </View>
  );
}

function BlogCard() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  return (
    <View style={styles.placesStyle}>
      <Image
        source={{
          uri: 'https://www.springboard.com/blog/wp-content/uploads/2022/11/12-best-javascript-courses-to-boost-your-skills-in-2023.jpeg',
        }}
        style={styles.imageStyle}
      />
      <View style={[styles.rowseperate]}>
        <Pressable
          onPress={() => Linking.openURL('https://example.com/read-more')}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.placeTitle,
                { color: pressed ? 'blue' : textColor },
              ]}
            >
              Read More
            </Text>
          )}
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL('https://example.com/read-more')}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.placeTitle,
                { color: pressed ? 'blue' : textColor },
              ]}
            >
              Follow Me
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

function Contacts({ data }) {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  return (
    <View style={styles.contacts}>
      <Image source={data.image} style={styles.profilePic} />
      <View style={styles.col}>
        <Text style={[styles.placeTime, { color: textColor }]}>
          {data.name}
        </Text>
        <Text style={[styles.placeTime, { color: textColor }]}>
          {data.thought}
        </Text>
      </View>
    </View>
  );
}
function MainApp() {
  const { isDarkMode, toggleTheme } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  return (
    <SafeAreaView
      style={[isDarkMode ? styles.darkMode : styles.lightMode, { flex: 1 }]}
      edges={['top']}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.row}>
          <Text style={[styles.heading, { color: textColor }]}>Flat Cards</Text>
          <TouchableOpacity
            onPress={toggleTheme}
            style={styles.themeSwitcherButton}
            activeOpacity={0.8}
          >
            <Svg height="36" width="72">
              <Rect
                x="0"
                y="0"
                width="72"
                height="36"
                rx="18"
                ry="18"
                fill={isDarkMode ? '#333333' : '#f0f0f0'}
                stroke={isDarkMode ? '#555555' : '#cccccc'}
                strokeWidth="1"
              />
              <Circle
                cx={isDarkMode ? 54 : 18}
                cy="18"
                r="14"
                fill={isDarkMode ? '#ffffff' : '#000000'}
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={styles.rowbox}>
          <Box color="red" />
          <Box color="green" />
          <Box color="pink" />
        </View>
        <View style={styles.row}>
          <Text style={[styles.heading, { color: textColor }]}>
            Elevated Cards
          </Text>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rowElevated}
            style={[styles.scrollViewStyle]}
          >
            <Box color="red" elevated />
            <Box color="green" elevated />
            <Box color="pink" elevated />
            <Box color="red" elevated />
            <Box color="green" elevated />
            <Box color="pink" elevated />
          </ScrollView>
        </View>
        <View style={styles.row}>
          <Text style={[styles.heading, { color: textColor }]}>
            Trending Places
          </Text>
        </View>
        <Places />
        <View style={styles.row}>
          <Text style={[styles.heading, { color: textColor }]}>Blog Card</Text>
        </View>
        <BlogCard />
        <View style={styles.row}>
          <Text style={[styles.heading, { color: textColor }]}>Contacts</Text>
        </View>
        <View>
          <Contacts
            data={{
              image: {
                uri: 'https://blog.logrocket.com/wp-content/uploads/2021/07/creating-hover-events-react-hover.png',
              },
              name: 'Sumit',
              thought: 'Believe in Yourself u Will Achieve',
            }}
          />
          <Contacts
            data={{
              image: {
                uri: 'https://blog.logrocket.com/wp-content/uploads/2021/07/creating-hover-events-react-hover.png',
              },
              name: 'Sumit',
              thought: 'Believe in Yourself u Will Achieve',
            }}
          />
          <Contacts
            data={{
              image: {
                uri: 'https://blog.logrocket.com/wp-content/uploads/2021/07/creating-hover-events-react-hover.png',
              },
              name: 'Sumit',
              thought: 'Believe in Yourself u Will Achieve',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  darkMode: {
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  lightMode: {
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'sans-serif',
  },
  rowseperate: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 14,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
  },
  rowbox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  themeSwitcherButton: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 72,
  },
  box: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  boxText: {
    textTransform: 'capitalize',
    fontSize: 30,
  },
  boxElevated: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 5,
  },
  rowElevated: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  scrollViewStyle: {
    height: 135,
  },
  placesStyle: {
    width: '95%',
    height: 250,
    backgroundColor: '#946a6a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageStyle: {
    width: '97%',
    height: '70%',
    marginBottom: 20,
    borderRadius: 20,
  },
  placeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  placeTime: {
    fontSize: 15,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  profilePic: {
    height: 35,
    width: 40,
    borderRadius: 50,
  },
  contacts: {
    width: '95%',
    height: 70,
    backgroundColor: '#946a6a',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    margin: 5,
  },
});
