import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// Sample image import - replace with your actual image path
import notFoundImage from '../../assets/gg.png'; // Adjust the path to your image

const SearchScreen = () => {
    // State to manage the search query and whether to show the "not found" state
    const [query, setQuery] = useState('');
    const [isNotFound, setIsNotFound] = useState(false);

    // Function to handle the search
    const handleSearch = () => {
        // For demo purposes, we'll assume the query always returns "not found"
        // In a real app, you'd check the query against some data source
        if (query.trim() !== '') {
            setIsNotFound(true); // Show the "not found" state
        } else {
            setIsNotFound(false); // Hide if query is empty
        }
    };

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Введите запрос"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handleSearch} // Trigger search on "Enter"
                />
                <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Поиск</Text>
                </TouchableOpacity>
            </View>

            {/* Conditional rendering for the "not found" state */}
            {isNotFound ? (
                <View style={styles.notFoundContainer}>
                    <Image
                        source={notFoundImage} // Use the imported image
                        style={styles.notFoundImage}
                        resizeMode="contain"
                    />

                </View>
            ) : (
                <Text style={styles.placeholderText}>Введите запрос для поиска</Text>
            )}
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Light beige background similar to the image
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#E8F0FE', // Light blue background like in the image
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    searchButton: {
        marginLeft: 10,
        backgroundColor: '#4682B4', // Steel blue color for the button
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    searchButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    notFoundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notFoundImage: {
        width: 400,
        height: 400,
        marginBottom: 20,
    },
    notFoundText: {
        fontSize: 18,
        color: '#8B4513', // Brownish color matching the text in the image
        fontWeight: '500',
    },
    placeholderText: {
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
});

export default SearchScreen;