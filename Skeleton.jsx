import React, { useRef, useEffect } from 'react';
import {
    Animated,
    View,
} from 'react-native';
const Skeleton = ({ size = 'large', type }) => {
    //define style
    const ComponentStyles = require('../Styles/Components');
    const GlobalStyles = require('../Styles/Global');

    //define variables
    const opacity = useRef(new Animated.Value(0.3));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                })
            ]),
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 0.3,
                    useNativeDriver: true,
                    duration: 800,
                })
            ])
        ).start();
    }, [opacity]);
    if (size == 'large') {
        return (
            <View style={ComponentStyles.Skeleton}>
                <Animated.View style={[{ opacity: opacity.current, width: '75%', height: 18, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '90%', height: 18, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '90%', height: 18, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '60%', height: 18, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: 65, height: 60, borderRadius: 0, }, ComponentStyles.Skeleton.Item]} />
            </View>
        );
    }
    if (size == 'xsmall') {
        return (
            <View style={ComponentStyles.Skeleton}>
                <Animated.View style={[{ opacity: opacity.current, width: 50, height: 50, borderRadius: 0, }, ComponentStyles.Skeleton.Item]} />
            </View>
        );
    }
    if (size == 'small') {
        return (
            <View style={ComponentStyles.Skeleton}>
                <Animated.View style={[{ opacity: opacity.current, width: '75%', height: 10, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '90%', height: 10, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '90%', height: 10, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '60%', height: 10, borderRadius: 3, }, ComponentStyles.Skeleton.Item]} />
            </View>
        );
    }
    if (size == 'square') {
        return (
            <View style={ComponentStyles.Skeleton}>
                <Animated.View style={[{ opacity: opacity.current, width: 100, height: 90, borderRadius: 0, }, ComponentStyles.Skeleton.Item]} />
            </View>
        )
    }
    if (size == "square_with_line") {
        return (
            <View style={GlobalStyles.flex_small}>
                <Animated.View style={[{ opacity: opacity.current, width: '22%', height: 75, borderRadius: 0, marginTop: 15 }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '75%', height: 75, borderRadius: 3, marginTop: 15 }, ComponentStyles.Skeleton.Item]} />
            </View>
        )
    }
    if (size == "circle") {
        return (
            <View style={[GlobalStyles.flex_large, GlobalStyles.margin_top_small, GlobalStyles.padding]}>
                <Animated.View style={[{ opacity: opacity.current, width: 75, height: 75, borderRadius: 50, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: 75, height: 75, borderRadius: 50, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: 75, height: 75, borderRadius: 50, }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: 75, height: 75, borderRadius: 50, }, ComponentStyles.Skeleton.Item]} />
            </View>
        )
    }
    if (size == "circle_with_line") {
        return (
            <View style={GlobalStyles.flex_small_center}>
                <Animated.View style={[{ opacity: opacity.current, width: 55, height: 55, borderRadius: 50, marginTop: 15 }, ComponentStyles.Skeleton.Item]} />
                <Animated.View style={[{ opacity: opacity.current, width: '73%', height: 55, borderRadius: 3, marginTop: 15 }, ComponentStyles.Skeleton.Item]} />
            </View>
        )
    }
    if (size == 'square_large') {
        return (
            <View style={GlobalStyles.flex_center}>
                <Animated.View style={[{ opacity: opacity.current, width: '90%', height: 350, borderRadius: 0, marginTop: 10 }, ComponentStyles.Skeleton.Item]} />
            </View>
        )
    }
}

export default Skeleton;