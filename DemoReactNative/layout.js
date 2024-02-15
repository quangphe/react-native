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
        <View style={{ flexDirection: 'row', width: '100%', height: '16.6%', borderWidth: 1, borderTopWidth: 0 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '66%', height: '100%', borderRightWidth: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}> 
              BBBBBBBBBB
            </Text>
          </View>
          <View style={{ width: '34%', height: '100%' }}>
            <View style={{ height: '50%', width: '100%', backgroundColor: 'green' }}></View>
            <View style={{ height: '50%', width: '100%', backgroundColor: 'blue' }}></View>
          </View>
        </View>
        {/* {----------} */}

        {/* ----------- */}
        <View style={{ flexDirection: 'row', width: '100%', height: '16.6%', borderWidth: 1, borderTopWidth: 0 }}>
          <View style={{ height: '100%', width: '33.3%', backgroundColor: '#EFCC0F', borderRightWidth: 1 }}></View>
          <View style={{ height: '100%', width: '33.3%', backgroundColor: '#0FBBEF', borderRightWidth: 1 }}></View>
          <View style={{ height: '100%', flex: 1, backgroundColor: '#81E0E0' }}></View>
        </View>
        {/* ----------- */}

        {/* ----------- */}
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '34%', width: '100%' }}>
          <View style={{ width: '60%', height: '60%', backgroundColor: '#692BB1' }}>
            <View style={{ backgroundColor: 'red', height: '50%', aspectRatio: 1, position: 'absolute', top: -20, right: -20}}></View>
          </View>
        </View>
        {/* ----------- */}

        {/* ----------- */}
        <View style={{ width: '100%', flex: 1, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', height: '50%'}}>
            <TouchableOpacity style={{ backgroundColor: '#A29E9E', justifyContent: 'center', alignItems: 'center', width: '40%', height: '100%', borderWidth: 3, borderColor: 'red', borderRadius: 50}}>
              <Text style={{ fontSize: 25, fontWeight: '500' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#081AF2', justifyContent: 'center', alignItems: 'center', width: '40%', height: '100%', borderWidth: 3, borderRadius: 50}}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: '500' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ----------- */}
      </View>
    </SafeAreaView>