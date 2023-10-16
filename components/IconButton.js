import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Pressable, Text, View, StyleSheet} from "react-native";
function IconButton({icon,color,onPress}) {
    return (
        <View>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed } >
                <Icon name={icon} size={24} color={color} />
            </Pressable>
        </View>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
       opacity: 0.5
    },

})