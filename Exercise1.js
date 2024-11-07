import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 24 }}>RP Values</Text>
            <Text style={{ color: 'green' }}>Excellence</Text>
            <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
            <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
            <Text style={{ textAlign: 'center' }}>Teamwork</Text>
            <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
        </View>
    );
};

export default App;

