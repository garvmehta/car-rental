import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import BackButton from './BackButton';
import { Colors } from '../config/colors.config';
import { Fonts } from '../config/font.config';
import { moderateScale } from 'react-native-size-matters';
import  { ReactNode, useMemo } from 'react';
interface AppBarProps {
    title: string,
    onBackPress?: () => void,
    backIconColor?: string,
    containerStyle?: ViewStyle,
    actionsComponents?: ReactNode
}
const AppBar = (props: AppBarProps) => {
    const { backIconColor = Colors.white } = props;
    const titleStyle:Array<TextStyle> = useMemo(()=>{
        return[ styles.title, { color: backIconColor }];
    },[backIconColor]);
    return (
        <View style={[styles.container, props.containerStyle]}>
            <View style={[styles.titleContainer]}>
                <BackButton
                    color={backIconColor}
                    size={moderateScale(20)}
                    onPress={props.onBackPress}
                    style={styles.backBtn} />

                <Text numberOfLines={1} style={titleStyle} children={props.title} />
            </View>
            <View style={styles.actionContainer}>
                {
                    props.actionsComponents
                }
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: moderateScale(4),
        // backgroundColor:'pink'

    },
    actionContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor:'green',
        width:'100%',
    },
    backBtn: {
        position: 'relative',
        left: 0,

        borderRadius: 100,
        padding: moderateScale(10),
    },
    backIcon: {
        paddingHorizontal: 8,
    },
    title: {
        width:'85%',
        fontFamily: Fonts.bold,
        fontSize: moderateScale(16),
        color: Colors.black,
        paddingHorizontal: moderateScale(8),
        textTransform: 'capitalize',
        textAlign:'center',
    },
    titleContainer: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default AppBar;
