# React Native
### I. Công cụ lập trình di động React Native

1. Code trực tiếp trên browser
- Truy cập vào https://snack.expo.dev
#### Ưu điểm:
- Có thể code trực tiếp trên trình duyệt web không cần cài đặt gì
#### Nhược điểm: 
- Do dùng chung máy ảo nên là khi nhiều người dùng code trên này thì sẽ phải xếp hàng chờ để view ra màn hình
- Code trên này thì khi gặp vấn đề mạng chậm thì cũng ảnh hưởng đến tốc độ load 

2. Cài đặt sử dụng máy ảo

3. Sử dụng máy thật

### II.  Setup môi trường code trên máy tính Window

1. Cài đặt Visual Studio Code
- Download: https://code.visualstudio.com/download

2. Cài đặt Node JS
- Download: https://nodejs.org/en/download/current

3. Cài đặt Git
- Download: https://www.git-scm.com/downloads

### III. Khởi tạo dự án React Native

1. Cài đặt ứng dụng React Native
- Sau khi cài đặt thành công NodeJS và npm trong hệ thống, bạn có thể tiến hành cài đặt create-react-native-app: npm install -g DemoReactNative

2. Tạo dự án bằng terminal
- Gõ câu lệnh: cd DemoReactNative 

3. Chạy dự án 
- Gõ câu lệnh: npm start

### IV. React Native - App

1. File App.js là nơi để hiển thị view ra màn hình

  ```
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default class App extends React.Component {
      render() {
          return (
            <View>
                <Text>Welcome to Tutorialspoint</Text>
            </View>
          );
      }
    }
  ```

### V. React Native - State

- State - là biến điều khiển trạng thái nội bộ của 1 component. State có thể thay đổi bằng cách gọi hàm this.setState({...}). Mỗi lần thay đổi state hàm render sẽ được gọi lại ngay sau đó (hàm render chỉ thay đổi những thành phần có liên quan đến những giá trị trong state bị thay đổi).
- Chúng ta nên bỏ các biến có liên quan đến UI vào trong state này, để khi state thay đổi, UI màn hình sẽ được vẽ lại và thay đổi theo.

  ```
    import React, { Component } from "react";
    import { Text, View } from "react-native";
    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          message: "Welcome to Code 101 - React-native",
        };
      }
      render() {
        return (
          <View>
            <Text>{this.state.message}</Text>
          </View>
        );
      }
    }
  ``` 

### VI. React Native - Props

- Props - là các thuộc tính được người dùng sử dụng truyền vào. Đây là các thông số được truyền vào để tùy chỉnh theo ý muốn của người xây dựng Component.
- Khác với state chúng ta không được thay đổi props ở trong chính bản thân của nó. Chúng ta chỉ nên đọc các thuộc tính được truyền vào để sử dụng mà thôi.

  ```
    import React, { Component } from "react";
    import { Text, View } from "react-native";
    class CustomText extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <Text>
            {this.props.message}
          </Text> /*Sử dụng props được truyền từ ngoài vào.*/
        );
      }
    }
    export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          message: "Welcome to Code 101 - React-native",
        };
      }
      render() {
        return (
          <CustomText
            message={this.state.message}
          /> /*truyền 1 props vào cho thằng con sử dụng.*/
        );
      }
    }
  ```

### VII. React Native - Hàm this.setState()

- Hàm dùng để thay đổi state của component. Đây là phương thức chính để cập nhật giao diện người dùng. Khi hàm này thực thi xong thì hàm render() sẽ được tự động gọi lại.
- Những giá trị nào của state thay đổi thì chỉ những thành phần có sử dụng biến state tương ứng đó được gọi để vẽ lại UI.
* Lưu ý: hàm này chạy bất đồng bộ nên chúng ta không nên đọc giá trị sau khi gọi hàm này.
- Cách sử dụng: 

  ```
    this.setState({
      message: "Chào mừng",
      key: "Value",
    });
    console.log(this.state.message); //không nên
    // không sử dụng this.state ngay sau khi vừa set xong
    // biến truyền vào cho hàm setState là một đối tượng có dạng key: value.
  ```

- Có thể sử dụng callback để check dữ liệu hoặc xử lý một số tác vụ sau khi thay đổi trạng thái

  ```
    this.setState(
      {
        message: "Chào mừng",
      },
      () => {
        console.log(this.state.message); // kết quả: Chào mừng
      }
    );
  ```

### VIII. React Native - Hàm this.forceUpdate()

- Mặc định hàm render() sẽ được gọi khi props hoặc state thay đổi. Nhưng nếu một vài thành phần UI sử dụng một số dữ liệu khác state hoặc prop muốn thay đổi, thì chúng ta cần thông báo cho React biết để vẽ lại toàn bộ bằng cách gọi hàm forceUpdate().
- Cách sử dụng: 

  ```
    import React from "react";
    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          index: 1
        };
      }
      render() {
        return (
          <div>
            <p>Giá trị: {Math.random()}</p>
            <button onClick={() => this.forceUpdate()}>Reload</button>
          </div>
        );
      }
    }
    export default App;
  ```

* Một vài lưu ý nhỏ khi dùng React Native:
- Trong state chỉ nên chứa dữ liệu, không nên chứa các View / Component vào trong state. Làm như vậy có thể gây double dữ liệu và việc quản lý UI trở nên phức tạp hơn và khó tùy biến sau này.
- Dữ liệu trong prop thì không nên thay đổi.
- Dữ liệu cần in ra màn hình và cần thay đổi lại UI khi nó thay đổi thì đặt vào state.

### IX. Các component thường sử dụng

1. View trong React Native
- Là một component cũng thường xuyên được sử dụng. Thường được sử dụng với mục đích chia các view con theo hàng dọc hoặc hàng ngang dựa vào thuộc tính flexDirection trong style là 'column/row' (dọc / ngang), hoặc sử dụng để chứa nhiều view con hoặc khi cần in ra màn hình một view không hiển thị gì hết
- Cách sử dụng:

  ```
    <View></View>
  ```

2. Text trong React Native
- Dùng để hiển thị 1 message lên màn hình. Có thể sử dụng text cố định hoặc in nội dung của một biến lên màn hình
- Cách sử dụng: 

  ```
    <Text>Message Here<Text>
    <Text>{variable_here}<Text>
  ```

3. Image trong React Native
- Dùng để hiển thị hình ảnh lên màn hình. Có 3 cách hiển thị:

+ Hiển thị ảnh Local: 

  ```
    <Image source={require("/react-native/img/favicon.png")} />
  ```

+ Hiển thị ảnh từ url:

  ```
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
      }}
    />
  ```

+ Hiển thị ảnh base 64:

  ```
    <Image
      style={{ width: 66, height: 58 }}
      source={{
        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      }}
    />
  ```

4. Button trong React Native

- Cách sử dụng:

  ```
    onPressButtonDemo(){
        console.log("Click Button")
    }
    ....
    <Button
        onPress={() => this.onPressButtonDemo()}
        title="Click Me!"
        color="#841584"
    />
  ```

5. TouchableOpacity trong React Native

- Thông thường mình thay thế việc sử dụng Button bằng TouchableOpacity để việc định dạng style giống nhau cho cả android và ios, TouchableOpacity có thể chứa bất kỳ view con nào, và nhớ lưu ý cách dùng sự kiện onPress giống như Button nhé.
- Cách sử dụng:

  ```
    <TouchableOpacity
      style={Styles.btnStyle}
      onPress={() => this.onPressTouchableOpacityDemo()}
    >
      <Text style={Styles.textAction}>Click Me</Text>
    </TouchableOpacity>
  ```

6. Flatlist trong React Native

- Đây là Component thường được sử dụng để hiển thị 1 danh sách lên màn hình.
- Cách sử dụng:

  ```
    <FlatList
        data={this.state.listData}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
    />
    /* Hiển thị chi tiết 1 item như thế nào */
    renderItem(item) {
        return (
            <View style={Styles.containerItem}>
                <Image
                    style={Styles.imgLogo}
                    resizeMode={'contain'}
                    source={item.image}
                />
                <Text>{item.title}</Text>
            </View>
        )
    }
  ```

- Một vài lưu ý khi sử dụng Flatlist:
+ Khi một thành phần data (ví dụ data[0] = ...) của bạn thay đổi thường thì không vẽ lại UI cho nên bạn sẽ cần thêm một thuộc tính là extraData={this.state}. Lúc này mỗi lần state thay đổi thì danh sách lại được vẽ lại
+ Có thể sử dụng Flatlist để làm như GridView trong android dựa vào thuộc tính numColumns={colum} (colum là số cột). Nhưng bạn sẽ cần phải tính toán width, height của mỗi colum để hiển thị đẹp nhất (Không có sẵn như fill_parent trong android).

### X. React Native - Styling

- Với React-Native hỗ trợ style cho tất cả các components . Nó đơn giản như bạn viết CSS cho Web.
- Trong CSS sử dụng cho HTML chúng ta viết background-color thì sang React-Native chúng ta sử dụng backgroundColor
- Có 3 kiểu khai báo styles:

1. Khai báo trực tiếp trong Component

  ```
  import React, { Component } from 'react';
    import {Text,View} from 'react-native';
    class StylesInComponent extends Component {
        render() {
        return (
            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
              }}>
            <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    margin: 10,
                    color: 'white',
            }}>
              Welcome to React Native!
              </Text>
              </View>
            );
        }
  }

  ```

2. Khai báo ngoài Component nhưng vẫn nằm trong một file. Đầu tiên bạn cần import thư viện StyleSheet. Tiếp theo bên ngoài Component bạn khai báo biến styles kiểu StyleSheet

  ```
    class StylesOutComponent extends Component {
        render() {
        return (
              <View style={styles.container}>
              <Text style={styles.welcome}>
                  Welcome to React Native!
              </Text>
              </View>
              );
          }
        }
    });

    const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
      },
      welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
      },
    });

  ```

3. Khai báo vào file riêng

- Tạo file có tên Styles.js với nội dung như sau:

  ```
    import { StyleSheet,} from 'react-native';
    const styles = StyleSheet.create({
          container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F5FCFF',
          },
          welcome: {
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
          }
    });
    export default styles;
  ```

- Đầu tiên bạn cần import thư viện StyleSheet. Tương tự bạn tạo cái selector CSS : container, welcome cho biến styles. Quan trọng nhất là bạn phải thêm dòng export default styles; vào cuối file. Khi bạn đã export thì có nghĩa là bạn có thể import styles ở bất kì đâu để sử dụng. Sử dụng câu lệnh import styles from './Styles' . Trong đó './Styles' là đường dẫn của tới Styles.js

  ```
    import styles from './Styles'
      class StylesNewFile extends Component {
            render() {
            return (
                    <View style={styles.container}>
                    <Text style={styles.welcome}>
                          Welcome to React Native!
                    </Text>
                    </View>
                  );
              }
      }

  ```

### XI. React Native - Flexbox

1. flexDirection

- flexDirection có hai giá trị 'row' và 'column'. Giá trị mặc định là 'column'. Nếu giá trị là 'row' đều đó có nghĩa là hướng trục chính(main axis direction) theo kiểu 'row', các view sẽ được sắp xếp theo chiều ngang. Ngược lại, nếu giá trị là 'column' các view sẽ được sắp xếp theo chiều dọc của component.

- Cách sử dụng:

  ```   
    import React, { Component } from 'react';
    import { View } from 'react-native';

    export default class Example extends Component {
      render() {
        return (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'black' }} />
          </View>
        );
      }
    }

  ```

2. justifyContent

- Sau khi tạo trục chính là 'row', sau đó thuộc tính justifyContent căn chỉnh các view. Bằng cách sử dụng 'flex-start', 'flex-end', 'center', chúng ta có thể sắp xếp các view theo trong hàng và bằng cách sử dụng 'space-around' và 'space-between' chúng ta có thể tạo khoảng trống giữa các view.

- Ví dụ:
  ```
    import React, { Component } from 'react';
    import { View } from 'react-native';

    export default class Example extends Component {
      render() {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'black' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
          </View>
        );
      }
    }

  ```

3. alignItems

- Ở đây, hướng trục chính(main axis direction) là 'row'(Horizontal), do đó thuộc tính alignItems sẽ sắp xếp các view với hướng ngược lại của trục chính (Vertical).

- Ví dụ:

  ```
  import React, { Component } from 'react';
  import { View } from 'react-native';

  export default class Example extends Component {
    render() {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'black' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
        </View>
      );
    }
  }

  ```

4. flex

- Một thuộc tính khác của flexbox là flex và nó là một giá trị số. Giả sử subview là một view có giá trị flex 1 và trong subview nếu chúng ta muốn cung cấp 20% không gian cho view thứ nhất, 20% không gian cho view thứ 2 và 60% cho view.

- Ví dụ: 

  ```
  import React, { Component } from 'react';
  import { View } from 'react-native';

  export default class Example extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.2, backgroundColor: 'red' }} />
          <View style={{ flex: 0.2, backgroundColor: 'black' }} />
          <View style={{ flex: 0.3, backgroundColor: 'green' }} />
          <View style={{ flex: 0.3, backgroundColor: 'blue' }} />
        </View>
      );
    }
  }

  ```

5. flexWrap

- Nó sẽ hoạt động như flex-wrap trong CSS. Ví dụ: nếu có rất nhiều view và không sử dụng thuộc tính flexWrap: 'wrap'. Thì tất cả các view sẽ hiển thị trong subview nhưng chúng ta sẽ chỉ thấy số lượng view được fit trên màn hình, không phải tất cả các view đều hiển thị.

- Ví dụ: 

  ```
    import React, { Component } from 'react';
    import { View, StyleSheet } from 'react-native';

    export default class Example extends Component {
      render() {
        return (
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      boxStyle: {
        height: 100, 
        width: 50, 
        borderWidth: 1, 
        backgroundColor: 'orange', 
        marginBottom: 5
      },
    });

  ```

### XII. React Native - ListView 

- Để tạo một danh sách, chúng ta sẽ sử dụng phương thức map() . Điều này sẽ lặp qua một mảng các mục và hiển thị từng mục.

- Cách sử dụng:

  ```
    ##### List.js

    import React, { Component } from 'react'
    import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
      
    class List extends Component {
      state = {
          names: [
            {
                id: 0,
                name: 'Ben',
            },
            {
                id: 1,
                name: 'Susan',
            },
            {
                id: 2,
                name: 'Robert',
            },
            {
                id: 3,
                name: 'Mary',
            }
          ]
      }
      alertItemName = (item) => {
          alert(item.name)
      }
      render() {
          return (
            <View>
                {
                  this.state.names.map((item, index) => (
                      <TouchableOpacity
                        key = {item.id}
                        style = {styles.container}
                        onPress = {() => this.alertItemName(item)}>
                        <Text style = {styles.text}>
                            {item.name}
                        </Text>
                      </TouchableOpacity>
                  ))
                }
            </View>
          )
      }
    }
    export default List

    const styles = StyleSheet.create ({
      container: {
          padding: 10,
          marginTop: 3,
          backgroundColor: '#d9f9b1',
          alignItems: 'center',
      },
      text: {
          color: '#4f603c'
      }
    })

  ```

  ```
    ##### App.js

    import React from 'react'
    import List from './List.js'

    const App = () => {
      return (
          <List />
      )
    }
    export default App

  ```

### XIII. React Native - Text Input

- TextInput là một thành phần cơ bản cho phép người dùng có thể nhập text. Nó có một tham số onChangeText dành cho việc cài đặt một function được gọi mỗi khi nội dung text trong khung nhập thay đổi, và một tham số onSubmitEditing để cài đặt function được gọi khi text được submit.

- Cách sử dụng: 

  ```
    import React, { Component } from 'react'
    import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

    class Inputs extends Component {
      state = {
          email: '',
          password: ''
      }
      handleEmail = (text) => {
          this.setState({ email: text })
      }
      handlePassword = (text) => {
          this.setState({ password: text })
      }
      login = (email, pass) => {
          alert('email: ' + email + ' password: ' + pass)
      }
      render() {
          return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleEmail}/>
                
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePassword}/>
                
                <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                      () => this.login(this.state.email, this.state.password)
                  }>
                  <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
          )
      }
    }
    export default Inputs

  ```

### XIV. React Native - ScrollView

- ScrollView là một thành phần giao diện cha, nó có thể chứa được nhiều những thành phần khác bên trong nó, và nó có khả năng scroll các thành phần ở bên trong nó. Các thành phần có thể scroll cần phải đồng nhất, và bạn có thể scroll dọc hoặc ngang bằng cách cài đặt cho thuộc tính horizontal.

- Cách sử dụng:

  ```
    import React, { Component } from 'react';
    import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

    class ScrollViewExample extends Component {
      state = {
          names: [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
          ]
      }
      render() {
          return (
            <View>
                <ScrollView>
                  {
                      this.state.names.map((item, index) => (
                        <View key = {item.id} style = {styles.item}>
                            <Text>{item.name}</Text>
                        </View>
                      ))
                  }
                </ScrollView>
            </View>
          )
      }
    }
    export default ScrollViewExample

  ```

### XV. React Native - Router

1. Cài đặt Router

- Chạy câu lệnh : npm i react-native-router-flux --save

2. Import Routes vào App.js

  ```
    import React, { Component } from 'react';
    import { AppRegistry, View } from 'react-native';
    import Routes from './Routes.js'

    class reactTutorialApp extends Component {
      render() {
          return (
            <Routes />
          )
      }
    }
    export default reactTutorialApp
    AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)

  ```

3. Tạo file Routes.js

  ```
    import React from 'react'
    import { Router, Scene } from 'react-native-router-flux'
    import Home from './Home.js'
    import About from './About.js'

    const Routes = () => (
      <Router>
          <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "about" component = {About} title = "About" />
          </Scene>
      </Router>
    )
    export default Routes

  ```

4. Tạo components

  ```
    ##### Home.js

    import React from 'react'
    import { TouchableOpacity, Text } from 'react-native';
    import { Actions } from 'react-native-router-flux';

    const Home = () => {
      const goToAbout = () => {
          Actions.about()
      }
      return (
          <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
            <Text>This is HOME!</Text>
          </TouchableOpacity>
      )
    }
    export default Home

  ```

  ```
    ##### About.js

    import React from 'react'
    import { TouchableOpacity, Text } from 'react-native'
    import { Actions } from 'react-native-router-flux'

    const About = () => {
      const goToHome = () => {
          Actions.home()
      }
      return (
          <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
            <Text>This is ABOUT</Text>
          </TouchableOpacity>
      )
    }
    export default About

  ```






