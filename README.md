# React Native
### Bài 1: Công cụ lập trình di động React Native

1. Code trực tiếp trên browser
- Truy cập vào https://snack.expo.dev
#### Ưu điểm:
- Có thể code trực tiếp trên trình duyệt web không cần cài đặt gì
#### Nhược điểm: 
- Do dùng chung máy ảo nên là khi nhiều người dùng code trên này thì sẽ phải xếp hàng chờ để view ra màn hình
- Code trên này thì khi gặp vấn đề mạng chậm thì cũng ảnh hưởng đến tốc độ load 

2. Cài đặt sử dụng máy ảo

3. Sử dụng máy thật

### Bài 2: Setup môi trường code trên máy tính Window

1. Cài đặt Visual Studio Code
- Download: https://code.visualstudio.com/download

2. Cài đặt Node JS
- Download: https://nodejs.org/en/download/current

3. Cài đặt Git
- Download: https://www.git-scm.com/downloads

### Bài 3: Khởi tạo dự án React Native

1. Cài đặt ứng dụng React Native
- Sau khi cài đặt thành công NodeJS và npm trong hệ thống, bạn có thể tiến hành cài đặt create-react-native-app: npm install -g DemoReactNative

2. Tạo dự án bằng terminal
- Gõ câu lệnh: cd DemoReactNative 

3. Chạy dự án 
- Gõ câu lệnh: npm start

### Bài 4: React Native - App

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

### Bài 5: React Native - State

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

### Bài 6: React Native - Props

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

### Bài 7: Một số hàm đặc biệt

1. Hàm this.setState()
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

2. Hàm this.forceUpdate()
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

3. Một vài lưu ý nhỏ khi dùng React Native
- Trong state chỉ nên chứa dữ liệu, không nên chứa các View / Component vào trong state. Làm như vậy có thể gây double dữ liệu và việc quản lý UI trở nên phức tạp hơn và khó tùy biến sau này.
- Dữ liệu trong prop thì không nên thay đổi.
- Dữ liệu cần in ra màn hình và cần thay đổi lại UI khi nó thay đổi thì đặt vào state.

### Bài 8: Các component thường sử dụng

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

