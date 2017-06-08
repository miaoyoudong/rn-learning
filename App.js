import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import TabContainer from './component/TabContainer';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <TextInput placeholder="用户名" style={styles.input}/>
        <TextInput placeholder="密码" style={styles.input} secureTextEntry/>
        <Button
          onPress={() => navigate('Chat')}
          title="登录"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: TabContainer }
});



const styles = StyleSheet.create({
  input: {
    borderRadius:5,
    borderWidth:0.3,
    borderColor:'#000000',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height:45,
    margin:18
  }
});

export default SimpleApp;
