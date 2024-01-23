import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ borderWidth: 1, width: '100%', height: '100%' }}>
        {/* {----------} */}
        <View style={{ flexDirection: 'row', width: '100%', height: '16.6%', borderWidth: 1 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '33%' }}>
            <View style={{ borderRadius: 20, width: '80%', height: '80%', backgroundColor: 'red'}}>

            </View>
          </View>
          <View style={{ height: '100%', width: '67%', borderLeftWidth: 1 }}>
              <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 10 }}>
                AAAAAAAAAAAAAA
              </Text>
          </View>
        </View>
        {/* {----------} */}

        {/* {----------} */}
        <View style={{ flexDirection: 'row', width: '100%', height: '16.6%', borderWidth: 1, borderTopWidth: 0}}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '66%', height: '100%', borderRightWidth: 1}}>
            <Text style={{ fontSize: 20, fontWeight: '700'}}> 
              BBBBBBBBBB
            </Text>
          </View>
        </View>
        {/* {----------} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
