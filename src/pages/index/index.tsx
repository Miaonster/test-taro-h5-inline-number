import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index' style={{ fontSize: 80 }}>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
