import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    UIManager,
    LayoutAnimation,
    TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const DEVICE_WIDTH = Dimensions.get('window').width


export const Triangle = (n, stylesTriangle, triangleHeight, trianglesWidth) => {
    var Trianlge = []
    for (let i = 0; i < n; i++) {
        Trianlge.push(
            <View style={[styles.arrowDown, {
                borderTopWidth: triangleHeight || DEVICE_WIDTH / (n * 2),
                borderRightWidth: DEVICE_WIDTH / (n * 2),
                borderBottomWidth: 0,
                borderLeftWidth: DEVICE_WIDTH / (n * 2),
                borderTopColor: stylesTriangle?.backgroundColor || 'white'
            }]} />
        )
    }
    return (
        <View style={{ flexDirection: 'row', width: '100%' }}>
            {Trianlge}
        </View>
    )
}

const styles = StyleSheet.create({

    triangle: {
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftWidth: 5,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        borderLeftColor: 'transparent',
    },
    arrowDown: {
        borderTopColor: "tomato",
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
});