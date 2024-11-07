import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise3 = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue' }]}>
                Child One
            </Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue' }]}>
                Child Two
            </Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
                Child Three
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        /*justifyContent: 'flex-start',*/
        /*justifyContent: 'flex-end',*/
        /*justifyContent: 'space-around',*/
        justifyContent: 'space-between',
        flex: 1, flexDirection: 'column', backgroundColor: '#FSfcff',
        borderColor: '0099AA', borderWidth: 5,
    },
    child: {
        maxHeight:90, flex: 1, borderWidth: 2,
        textAlign: 'center', fontsize: 24,
    }
})

export default Exercise3;
