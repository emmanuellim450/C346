import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue' }]}>
                Child One
            </Text>
            <Text style={[styles.child, {backgroundColor: 'lightgreen' }]}>
                Child Two
            </Text>
            <Text style={[styles.child, {backgroundColor: 'red'}]}>
                Child Three
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex:1, flexDirection: 'row', backgroundColor: 'whitesmoke', marginTop: 30,
        borderColor: '0099AA', borderWidth: 5,
    },
    child: {
        width: 80, height: 80, borderWidth: 2,
        textAlign: 'center', textAlignVertical: "center", fontsize: 24
    }
})

export default Exercise4;
