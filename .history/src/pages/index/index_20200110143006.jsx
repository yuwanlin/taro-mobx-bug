import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    this.props.counterStore.add()
  }

  decrement = () => {
    this.props.counterStore.minus()
  }

  handleClick = () => {
    Taro.navigateTo({
      url: '/pages/other/index'
    })
  }

  render () {
    const { counterStore: { count } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Text>{count}</Text>
        <View onClick={this.handleClick}>点击跳转到其他页面</View>
      </View>
    )
  }
}

export default Index
