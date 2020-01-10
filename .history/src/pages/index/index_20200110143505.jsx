// import { ComponentType } from 'react'
import Taro, { Component, Config, navigateTo, showToast } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx';
import { View, Text, Button, Image } from '@tarojs/components';
import { requestUtil } from '@/utils/request/index';
import { APIS } from '@/apis/index';
import ImgSrc from '@/assets/images/broadcast_img_symbol@2x.png';
import CareIcon from '@/components/care-icon';
// import { this.props.indexStore } from './store/index';
import styles from './style.module.scss';

@inject('indexStore')
@observer
class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    count: 0,
  }

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

  handleAdd = () => {
    this.props.indexStore.add();
  }

  handlePlus = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.props.indexStore.add();
  }

  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })
    this.props.indexStore.minus();
  }

  choose = () => {
    navigateTo({
      url: '/pages/choose-role-and-select-children/index'
    });
  }

  tapBox = () => {
    this.props.indexStore.changeProp('count', 10);
  }

  clickCareIcon = () => {
    showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 2000,
    })
  }

  handleClick = () => {
    console.log('首页navigateTo跳转到其他页面')
    Taro.navigateTo({
      url: '/pages/other/index'
    })
  }

  render () {
    const { indexStore: { count } } = this.props;
    // const { counterStore: { counter } } = this.props

    console.log('count', count)
    return (
      <View className={styles['index']}>
        <View className={`${styles['haha']} ${styles['aa']}`}>钉钉小程序 </View>
        <Text className={`${styles['haha']}`}>store中count：{count} </Text>
        <Text>本地count：{this.state.count}</Text>
        <Button onClick={this.handlePlus} type='primary'>加</Button>
        <Button onClick={this.handleMinus} type='primary'>减</Button>
        <View onClick={this.handleClick}>点击跳转到其他页面</View>
        {/* <Image src='http://uxc.gz.cvte.cn/statics/a287beadc1d6bf86d0e494fc361766ec/depot_bg_ranking_large_blue.png' /> */}

        {/* <Image
          style={`width: ${Taro.pxTransform(324)};height: ${Taro.pxTransform(24)};`}
          src={ImgSrc}
        />

        <Text className='iconfont' style='font-size: 60rpx; color: #3cf'>&#xe626;</Text>
        <CareIcon text='&#xe65e;' />
        <CareIcon
          type='iconfont icon-common_ic_heart_blac'
          onClick={this.clickCareIcon}
        />

        <View className={styles['bg-image']}></View>
        <View onClick={this.tapBox} className={styles.box}
          style={{width: Taro.pxTransform(750)}}
        ></View> */}
      </View>

    )
  }
}

export default Index
