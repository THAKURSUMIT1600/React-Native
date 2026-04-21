// Center Press Here and Background Color Change

// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   const [bgcolor, setBgColor] = useState('#000000');
//   const generatecolor = () => {
//     let result = '#';
//     const char = '#0123456789ABCDEFabcdef';
//     for (let i = 0; i < 6; i++) {
//       let val = Math.floor(Math.random() * char.length);
//       result += char.charAt(val);
//     }
//     setBgColor(result);
//   };
//   return (
//     <SafeAreaView>
//       <StatusBar barStyle={'dark-content'} />
//       <View style={[styles.container, { backgroundColor: bgcolor }]}>
//         <TouchableOpacity onPress={generatecolor}>
//           <View style={styles.buttonbox}>
//             <Text style={styles.button}>Press Here</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonbox: {
//     width: 140,
//     height: 60,
//     backgroundColor: '#a6a3a3',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     fontSize: 22,
//     color: 'black',
//     fontWeight: 900,
//   },
// });

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [bgcolor, setBgColor] = useState('#000000');
  const [circle, setCircle] = useState('#ffffff');
  const [square, setSquare] = useState('#ffffff');
  const [rectangle, setRectangle] = useState('#ffffff');
  const [triangle, setTriangle] = useState('#ffffff');
  const generatecolor = () => {
    let result = '#';
    const char = '#0123456789ABCDEFabcdef';
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * char.length);
      result += char.charAt(val);
    }
    setBgColor(result);
    result = '#';
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * char.length);
      result += char.charAt(val);
    }
    setCircle(result);
    result = '#';
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * char.length);
      result += char.charAt(val);
    }
    setRectangle(result);
    result = '#';
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * char.length);
      result += char.charAt(val);
    }
    setSquare(result);
    result = '#';
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * char.length);
      result += char.charAt(val);
    }
    setTriangle(result);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={[styles.container, { backgroundColor: bgcolor }]}>
        <View style={styles.row}>
          <View style={[styles.circle, { backgroundColor: circle }]}>
            <Text>Circle</Text>
          </View>
          <View style={[styles.square, { backgroundColor: square }]}>
            <Text>Square</Text>
          </View>
        </View>
        <View style={styles.line}>
          <TouchableOpacity style={styles.touch} onPress={generatecolor}>
            <View style={styles.buttonbox}>
              <Text style={styles.button}>Press Here</Text>
            </View>
          </TouchableOpacity>{' '}
        </View>
        <View style={styles.row}>
          <View style={[styles.rec, { backgroundColor: rectangle }]}>
            <Text>rectangle</Text>
          </View>
          <View style={[styles.tri, { backgroundColor: triangle }]}>
            <Text>triangle</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  touch: {},
  line: {
    margin: 140,
  },
  circle: {
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  rec: {
    width: 140,
    borderRadius: 4,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  tri: {
    borderRadius: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  square: {
    borderRadius: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbox: {
    width: 140,
    height: 60,
    backgroundColor: '#a6a3a3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 22,
    color: 'black',
    fontWeight: 900,
  },
});
