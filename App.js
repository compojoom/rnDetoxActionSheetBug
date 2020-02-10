/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    TouchableOpacity,
    Switch
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MySwitch = ({testID}) => {
  const [touched, setTouched] = useState(false)

  const handleSwitch = useCallback(() => {
    setTouched(!touched)
  }, [touched])

  return (
        <Switch
            value={touched}
            disabled={false}
            onValueChange={handleSwitch}
            testID={testID + "NetworkSwitch"}
        />
  );
}
const App: () => React$Node = () => {

  return (
      <View style={{marginTop: 150}}>
        <MySwitch testID={"A"} />
        <MySwitch testID={"B"} />
        <MySwitch testID={"C"} />
        <MySwitch testID={"D"} />
        <MySwitch testID={"E"} />
        <MySwitch testID={"F"} />
      </View>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
