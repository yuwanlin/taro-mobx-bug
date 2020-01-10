// import { ComponentType } from 'react'
import Taro, { Component, Config, navigateTo, showToast } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx';
import { View, Text, Button, Image } from '@tarojs/components';
// import { requestUtil } from '@/utils/request/index';
// import { APIS } from '@/apis/index';
// import ImgSrc from '@/assets/images/broadcast_img_symbol@2x.png';
// import CareIcon from '@/components/care-icon';
// import { this.props.indexStore } from './store/index';
import styles from './style.module.scss';

@inject('indexStore')
@observer
class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  // state = {
  //   count: 0,
  // }

  componentWillMount () {
    // requestUtil(APIS.FETCH_TEST_API, {});
    // requestUtil(APIS.POST_TEST_API, {});
  }

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  componentWillReact () {
    console.log('index componentWillReact', this.props.indexStore.count)
  }

  componentDidMount () {
    console.log('index componentDidMount', this.props.indexStore.count)
  }
  handlePlus = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    this.props.indexStore.add();
  }

  handleMinus = () => {
    // this.setState({
    //   count: this.state.count - 1
    // })
    this.props.indexStore.minus();
  }

  handleClick = () => {
    console.log('首页navigateTo跳转到其他页面')
    Taro.navigateTo({
      url: '/pages/other/index'
    })
  }

  render () {
    const { indexStore: { count } } = this.props;
    console.log('count', count)
    return (
      <View>
        <View>store中count：{count} </View>
        {/* <View>本地count：{this.state.count}</View> */}
        <Button onClick={this.handlePlus} type='primary'>加</Button>
        <Button onClick={this.handleMinus} type='primary'>减</Button>
        <View onClick={this.handleClick}>点击跳转到其他页面</View>
      </View>

    )
  }
}

export default Index
