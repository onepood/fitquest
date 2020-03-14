import React, {Component} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'

class LoadView extends Component {
  render() {
    const {networkError} = this.props
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

export default LoadView