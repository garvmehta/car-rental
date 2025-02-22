import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Size, Spacing } from '../../../config/size.config';
import Search from './search';
import { FontStyle, Style } from '../../../config/style.config';
import { Colors } from '../../../config/colors.config';
import AppButton from '../../../components/AppButton';
import Swiper from 'react-native-swiper';
import { BannerType } from '../../../store/interfaces';
import { Fonts } from '../../../config/font.config';

const IMAGE_URL = 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
interface HeaderPropType{
    banners:BannerType[]
}
const Header = ({banners}:HeaderPropType) => {
    return (
        <View style={styles.headerContainer}>
            <Search />
            <Swiper
                height={moderateScale(250)}
                showsPagination
                activeDotStyle={styles.activeDot}
                dotStyle={styles.dot}
                loop={false}
                paginationStyle={styles.pagination}
            >
                {
                    banners.map((item,index)=>{return(<Slide {...item} key={`Banner${index}`} />);})
                }
            </Swiper>
        </View>
    );
};

const Slide = (props:BannerType) => (
    <ImageBackground source={{ uri: IMAGE_URL }} style={[styles.slideContainer, {backgroundColor:props.background.color}]}>
        <View style={styles.slideContent}>
            <Text style={[styles.title,{color:props.header.color}]}>{props.header.value}</Text>
            <Text style={[styles.subtitle,{color:props.subheader.color}]}>{props.subheader.value}</Text>
            <View style={[Style.flexRow, {justifyContent:props.action.position as any}]} >
            <AppButton
                label={props.action.value}
                loading={false}
                btnstyle={{...styles.button, backgroundColor:props.action.background_color}}
                textStyle={{...styles.buttonText, color:props.action.text_color}}
                onClick={() => {}}
            />
            </View>
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
    },
    slideContainer: {
        paddingTop: (Spacing.topSpace ?? 0) * 1 + moderateScale(50),
        paddingHorizontal: moderateScale(10),
        height: Size.screenHeight * 0.35,
    },
    slideContent: {
        paddingHorizontal: moderateScale(5),
    },
    title: {
        ...FontStyle.bold,
        paddingTop: moderateScale(10),
        color: Colors.white,
    },
    subtitle: {
        ...FontStyle.title,
        color: Colors.white,
        fontSize: moderateScale(13),
    },
    button: {
        minHeight: 'auto',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(14),
        padding: moderateScale(14),
    },
    buttonText: {
        fontFamily:Fonts.bold,
        fontSize: moderateScale(10),
    },
    activeDot: {
        width: moderateScale(10),
        height: moderateScale(5),
        backgroundColor: Colors.primary,
    },
    dot: {
        width: moderateScale(10),
        height: moderateScale(5),
        backgroundColor: Colors.white,
    },
    pagination: {
        paddingLeft: moderateScale(8),
        justifyContent: 'flex-start',
    },
});

export default Header;
