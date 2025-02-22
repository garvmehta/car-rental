import { ReactNode } from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../config/colors.config';
import { Style } from '../config/style.config';
import { Fonts } from '../config/font.config';
interface CategorySectionProps {
    containerStyle?: ViewStyle,
    titleStyle?: TextStyle,
    moreStyle?: TextStyle
    title?: String,
    left?: ReactNode,
    children: ReactNode,
    gradient?: Array<string | number>,
    prefixAtTitle?:ReactNode,
    headerContainerStyle?:ViewStyle,
    onViewAllPress?: () => void
}
const CategorySection = (props: CategorySectionProps) => {
    // console.log(props.children)
    const Com = () => props.children;
    return (
        <View style={[styles.container, props.containerStyle]}>

            <Header
                title={props.title}
                titleStyle={props.titleStyle}
                moreStyle={props.moreStyle}
                left={props.left}
                onViewAllPress={props.onViewAllPress}
                {...props}
            />
            <View>
                <Com />
            </View>
        </View>
    );



};
interface HeaderPropType {
    title?: String,
    titleStyle?: TextStyle,
    left?: ReactNode,
    onViewAllPress?: () => void,
    moreStyle?: TextStyle,
    prefixAtTitle?:ReactNode,
    headerContainerStyle?:ViewStyle
}
const Header = ({ title, titleStyle, left, onViewAllPress, moreStyle, prefixAtTitle, headerContainerStyle }: HeaderPropType) => {
    return (
        (title) && <>
            <View style={[styles.topBarContainer,headerContainerStyle]}>
                <View  style={[Style.flexRow]}>
                {
                    prefixAtTitle
                }
                <Text style={[styles.title, titleStyle]} >{title}</Text>
                </View>
                {
                    (left) &&
                    <TouchableOpacity onPress={onViewAllPress} style={[Style.flexRow]}>
                        <Text style={[styles.more, moreStyle]}>See All</Text>
                    </TouchableOpacity>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(20),
    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: moderateScale(5),
    },
    title: {
        // Font,
        fontFamily: Fonts.semibold,
        fontSize: moderateScale(14),
        textTransform: 'capitalize',
    },
    more: {

        fontSize: moderateScale(12),
        fontFamily: Fonts.medium,
        color: Colors.primary,
        textTransform: 'capitalize',
        marginHorizontal: moderateScale(4),
    },
});
export default CategorySection;
