import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Colors from '../components/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from "@expo/vector-icons/FontAwesome";


interface CustomHeaderProps {
    title: string;
    showBackButton?: boolean;
    showProfileButton?: boolean;
}

const CustomHeaderDetail: React.FC<CustomHeaderProps> = ({title, showBackButton = false, showProfileButton = false}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {showBackButton && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Entypo name="chevron-thin-left" size={30} color={Colors.white} />
                </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.cartBlog}>
              <FontAwesome name="heart" size={20} color={Colors.white} style={[{marginRight: 5}]} />
              <FontAwesome name="shopping-basket" size={17} color={Colors.white} style={[{marginLeft: 5}]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 60,
        marginTop: 60,
        backgroundColor: "rgba(255,255,255,0)"
    },
    cartBlog: {
        marginLeft: 26,
        flexDirection: "row",
    },
    cartDot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: Colors.pink,
        position: "absolute",
        left: 17
    },
});

export default CustomHeaderDetail;