import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise2 = () => {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Who We Are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
    },
});

export default Exercise2;
