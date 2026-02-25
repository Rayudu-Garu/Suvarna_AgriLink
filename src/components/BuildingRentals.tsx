import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

const categories = ['Construction', 'Painting', 'Wood'];

const BuildingRentals = ({ navigation }) => {

    const [data, setData] = useState({
        Construction: [],
        Painting: [],
        Wood: []
    });

    const addItem = (cat) => {
        const list = [...data[cat]];
        list.push({
            checked: false,
            name: '',
            photoEnabled: false,
            photo: null
        });

        setData({ ...data, [cat]: list });
    };

    const updateItem = (cat, index, key, value) => {
        const list = [...data[cat]];
        list[index][key] = value;
        setData({ ...data, [cat]: list });
    };

    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Building Rentals</Text>

            {categories.map(cat => (
                <View key={cat} style={styles.section}>

                    <Text style={styles.sectionTitle}>{cat}</Text>

                    {data[cat].map((item, index) => (
                        <View key={index} style={styles.cardRow}>

                            {/* checkbox */}
                            <TouchableOpacity
                                style={[styles.checkbox, item.checked && styles.checked]}
                                onPress={() => updateItem(cat, index, 'checked', !item.checked)}
                            />

                            {/* text */}
                            <TextInput
                                placeholder="Equipment name"
                                style={styles.input}
                                value={item.name}
                                onChangeText={(t) => updateItem(cat, index, 'name', t)}
                            />

                            {/* photo toggle */}
                            <TouchableOpacity
                                style={styles.photoBtn}
                                onPress={() => updateItem(cat, index, 'photoEnabled', !item.photoEnabled)}
                            >
                                <Text style={{ color: '#fff' }}>Photo</Text>
                            </TouchableOpacity>

                        </View>
                    ))}

                    <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => addItem(cat)}
                    >
                        <Text style={{ color: '#fff' }}>+ Add {cat}</Text>
                    </TouchableOpacity>

                </View>
            ))}

        </ScrollView>
    );
};

export default BuildingRentals;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#eef3ef' },
    back: { fontSize: 18, color: '#007aff', marginBottom: 10 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    section: { marginBottom: 25 },
    sectionTitle: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },

    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 10
    },
    checked: { backgroundColor: '#2e7d32' },

    input: {
        flex: 1,
        borderBottomWidth: 1,
        marginRight: 10
    },

    photoBtn: {
        backgroundColor: '#0b1573',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8
    },

    addBtn: {
        backgroundColor: '#2e7d32',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5
    }
});