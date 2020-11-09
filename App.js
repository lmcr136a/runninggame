import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const App: () => React$Node = () => {
    return(
        <View style={styles.container}>
            <View style={styles.settings}>

            </View>

            <View style={styles.secondbox}>

            </View>

            <View style={styles.bottombox}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgb(100, 100, 100)'
    },
    settings:{
        flex:1,
        backgroundColor: 'rgb(210, 222, 222)'
    },
    secondbox:{
        flex:6,
        backgroundColor: 'rgb(222, 210, 222)'
    },
    bottombox:{
        flex:6,
        backgroundColor: 'rgb(222, 222, 210)'
    }
});

export default App;
