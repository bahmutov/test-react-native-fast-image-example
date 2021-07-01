import React from 'react'
import { Text, View } from 'react-native'

console.log('FastImageWrapper for web')

const FastImage = () => {
    return <View><Text>FastImage Here</Text></View>
}
FastImage.priority = {
    low: 'low',
    normal: 'normal',
    high: 'high',
}

export default FastImage

