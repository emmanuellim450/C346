import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const Boat = ({}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.boatContainer}>
                <Text style={styles.name}>{'Sea Ray 500 Sundancer'}</Text>
                <Text style={styles.description}>{'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'}</Text>
                <Image source={require('./img/sea_ray.jpg')} style={styles.image} />
            </View>
            <View style={styles.boatContainer}>
                <Text style={styles.name}>{'Four Winns Horizon 180'}</Text>
                <Text style={styles.description}>{'A sporty look and refined details truly set the Horizon 180 above all others.'}</Text>
                <Image source={require('./img/four_winns.jpg')} style={styles.image} />
            </View>
            <View style={styles.boatContainer}>
                <Text style={styles.name}>{'Flipper 640 ST'}</Text>
                <Text style={styles.description}>{'A modern take on the classic, traditional hardtop and perfect for a family picnic.'}</Text>
                <Image source={require('./img/flipper.jpg')} style={styles.image} />
            </View>
            <View style={styles.boatContainer}>
                <Text style={styles.name}>{'Princess V48'}</Text>
                <Text style={styles.description}>{'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'}</Text>
                <Image source={require('./img/princess.jpg')} style={styles.image} />
            </View>
            <View style={styles.boatContainer}>
                <Text style={styles.name}>{'Bayliner 175 Bowrider'}</Text>
                <Text style={styles.description}>{'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'}</Text>
                <Image source={require('./img/bayliner.jpg')} style={styles.image} />
            </View>
            <View style={styles.boatContainer}>
                <Text style={styles.name}>{'Fairline Targa 47'}</Text>
                <Text style={styles.description}>{'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'}</Text>
                <Image source={require('./img/fairline.jpg')} style={styles.image} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    boatContainer: {
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
    },
});

export default Boat;
