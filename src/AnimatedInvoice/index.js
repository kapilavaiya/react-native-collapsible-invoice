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
import { Triangle } from './Triangle';

const DEVICE_WIDTH = Dimensions.get('window').width


const AnimatedInvoice = ({ triangleNumbers, children, barStyle, triangleStyle, triangleHeight, trianglesWidth, barComponent, iconColor }) => {

    const [expand, setExpand] = useState(false)

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpand(!expand)
    }

    return (
        <>
            <View style={[barStyle, { width: triangleNumbers ? DEVICE_WIDTH : null, backgroundColor: barStyle?.backgroundColor || 'white', height: 50, flexDirection: 'row', alignItems: 'center' }]}>
                {barComponent}
                <TouchableOpacity onPress={toggleExpand} style={{ position: 'absolute', right: 10 }}>
                    <MaterialIcons name={expand ? 'arrow-drop-up' : 'arrow-drop-down'} size={30} color={iconColor} />
                </TouchableOpacity>
            </View>
            <View style={{ height: expand ? null : 0, width: triangleNumbers ? DEVICE_WIDTH : null, overflow: 'hidden', backgroundColor: 'white' }}>
                {children}
            </View>
            {Triangle(triangleNumbers, triangleStyle, triangleHeight, trianglesWidth)}
        </>
    )
}

export default AnimatedInvoice