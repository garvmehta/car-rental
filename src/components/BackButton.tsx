import { useNavigation } from '@react-navigation/native';
import {   StyleSheet, TextStyle } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';


const BackButton = (prop: { color: string, size: number, onPress?: () => void, style?: TextStyle }) => {
    const Nav = useNavigation();
    function pushNewScreen(): void {
        (prop.onPress !== undefined) ? prop.onPress() : Nav.goBack();
    }
    return (
        <TouchableRipple style={[styles.btn, prop.style]} onPress={pushNewScreen} >
            <Icons name={'arrowleft'} color={prop.color} size={prop.size} />
        </TouchableRipple>
    );
};
const styles = StyleSheet.create({

    btn: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 15,
        padding: 4,

    },
});
export default BackButton;
