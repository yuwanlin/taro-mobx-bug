import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

class OtherPage extends Component {

  render() {
    return (
      <View>这是 otherPage，点击返回首页</View>
    )
  }
}

export default OtherPage;
