import React from 'react'
import { Platform, PixelRatio, StyleSheet, Text, View } from 'react-native'
import withCacheBust from './withCacheBust'
import Section from './Section'
import SectionFlex from './SectionFlex'
import FeatureText from './FeatureText'
import FastImage from './FastImageWrapper'
// import FastImage from 'react-native-fast-image'

// const MyFastImage = () => {
//     return <View><Text>FastImage Here</Text></View>
// }
// MyFastImage.priority = {
//     low: 'low',
//     normal: 'normal',
//     high: 'high',
// }

// let FastImage

// console.log('platform', Platform.OS)
// if (Platform.OS === 'web') {
//     FastImage = MyFastImage
// } else {
//     FastImage = require('react-native-fast-image')
//     // import FastImage from 'react-native-fast-image'
// }

const getImageUrl = (id: string, width: number, height: number) =>
    `https://source.unsplash.com/${id}/${width}x${height}`
const IMAGE_SIZE = 1024
const IMAGE_SIZE_PX = PixelRatio.getPixelSizeForLayoutSize(IMAGE_SIZE)
const IMAGE_URLS = [
    getImageUrl('x58soEovG_M', IMAGE_SIZE_PX, IMAGE_SIZE_PX),
    getImageUrl('yPI7myL5eWY', IMAGE_SIZE_PX, IMAGE_SIZE_PX),
    getImageUrl('S7VCcp6KCKE', IMAGE_SIZE, IMAGE_SIZE),
]

interface PriorityExampleProps {
    onPressReload: () => void
    bust: string
}

const PriorityExample = ({ onPressReload, bust }: PriorityExampleProps) => (
    <View>
        {/* <Section>
            <FeatureText text="• Prioritize images (low, normal, high)." />
        </Section> */}
        <SectionFlex onPress={onPressReload}>
            <FastImage
                style={styles.image}
                source={{
                    uri: IMAGE_URLS[0] + bust,
                    priority: FastImage.priority.low,
                }}
            />
            <FastImage
                style={styles.image}
                source={{
                    uri: IMAGE_URLS[1] + bust,
                    priority: FastImage.priority.normal,
                }}
            />
            <FastImage
                style={styles.image}
                source={{
                    uri: IMAGE_URLS[2] + bust,
                    priority: FastImage.priority.high,
                }}
            />
        </SectionFlex>
    </View>
)

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 100,
        backgroundColor: '#ddd',
        margin: 10,
        marginVertical: 20,
    },
})

// export default withCacheBust(PriorityExample)
export default PriorityExample
