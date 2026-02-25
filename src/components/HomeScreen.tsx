import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const tiles = [
    { id: 'farmer', title: 'Farmer', icon: '🌾' },
    { id: 'builder', title: 'Building Worker', icon: '👷' },
    { id: 'painter', title: 'Painter', icon: '🎨' },
    { id: 'agri', title: 'Agri Equipment Rental', icon: '🚜', large: true },
    { id: 'equip', title: 'Building & Painter Equipment Rental', icon: '⚙️', large: true },
];

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const onTilePress = (id: string) => {
        // placeholder — navigate to relevant screen when available
        console.log('tile press', id);
        navigation.navigate?.(id);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('isLoggedIn');
        navigation.replace?.('Login');
    };

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.header}>Select Your Account Type</Text>

                <View style={styles.grid}>
                    {tiles.map((t) => (
                        <TouchableOpacity
                            key={t.id}
                            style={[styles.card, t.large ? styles.cardLarge : styles.cardSmall]}
                            onPress={() => onTilePress(t.id)}
                            activeOpacity={0.8}
                        >
                            <View style={styles.cardImage}>
                                <Text style={styles.icon}>{t.icon}</Text>
                            </View>
                            <Text style={styles.cardTitle}>{t.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.logout} onPress={logout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Home')}>
                    <MaterialIcons name="home" size={24} color={activeTab === 'Home' ? '#f06d2f' : '#9aa3ad'} />
                    <Text style={[styles.tabLabel, activeTab === 'Home' && styles.tabLabelActive]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Orders')}>
                    <MaterialIcons name="shopping-bag" size={24} color={activeTab === 'Orders' ? '#f06d2f' : '#9aa3ad'} />
                    <Text style={[styles.tabLabel, activeTab === 'Orders' && styles.tabLabelActive]}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Chats')}>
                    <MaterialIcons name="chat" size={24} color={activeTab === 'Chats' ? '#f06d2f' : '#9aa3ad'} />
                    <Text style={[styles.tabLabel, activeTab === 'Chats' && styles.tabLabelActive]}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Profile')}>
                    <MaterialIcons name="person" size={24} color={activeTab === 'Profile' ? '#f06d2f' : '#9aa3ad'} />
                    <Text style={[styles.tabLabel, activeTab === 'Profile' && styles.tabLabelActive]}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#f7f8fb' },
    content: { paddingTop: 24, paddingHorizontal: 16, paddingBottom: 120, alignItems: 'center' },
    header: { fontSize: 22, fontWeight: '700', marginBottom: 16, color: '#f06d2f' },
    grid: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    cardSmall: { width: (width - 48) / 3, height: 120, padding: 8 },
    cardLarge: { width: (width - 40), height: 140, padding: 10 },
    cardImage: { flex: 1, justifyContent: 'center' },
    icon: { fontSize: 34 },
    cardTitle: { paddingTop: 8, fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#0b4b6f' },
    logout: { marginTop: 8 },
    logoutText: { color: '#d9534f' },
    tabBar: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 16,
        height: 64,
        borderRadius: 14,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 6,
    },
    tab: { alignItems: 'center', justifyContent: 'center' },
    tabIcon: { fontSize: 20, color: '#9aa3ad' },
    tabLabel: { fontSize: 12, color: '#9aa3ad', marginTop: 2 },
    tabActive: { color: '#f06d2f' },
    tabLabelActive: { color: '#f06d2f', fontWeight: '700' },
});

export default HomeScreen;