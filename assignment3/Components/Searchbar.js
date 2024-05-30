import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const SearchBar = ({placeholder}) => {
    return (
        <View style = {styles.container}>
         <Icon name="search" size={16} color="#888" style={styles.searchIcon} />
         <Text style = {styles.text}>{placeholder || 'Search'}</Text>
         </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 12,
        marginVertical: 400,
        marginTop: 0,
        backgroundColor: 'white',
        width: '75%',
        height: 50,
        paddingHorizontal: 10,
    },

    searchIcon: {
        marginRight: 8,
        paddingVertical: 10,
        color: 'black',
    },

   text : {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8
}

})

export default SearchBar;