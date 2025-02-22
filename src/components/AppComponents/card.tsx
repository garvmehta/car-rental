import {
    Image,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import AppImage from '../../components/AppImage';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../config/colors.config';
import { Icons } from '../../generated/image.assets';
import { FontStyle } from '../../config/style.config';
import { Fonts } from '../../config/font.config';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import { memo } from 'react';
import { Size } from '../../config/size.config';
import { CarType } from '../../store/interfaces';


const IMAGE_URL = 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const IMAGE_HEIGHT = moderateScale(180);
interface CardPropType extends CarType{
    containerStyle?:ViewStyle
}
const Card = memo((props: CardPropType) => {
    return (
        <View style={[styles.container , props.containerStyle]}>
            <Slide {...props} />
            <View style={styles.detailBox}>
                <Text style={[FontStyle.titleSemibold, styles.name]}>
                    {props.name}
                </Text>

                <View style={styles.highlights}>
                    {
                        props.rating &&
                        <HighLight label={props?.rating.toString()} labelStyle={styles.highlightBold} />
                    }
                    <HighLight label={props?.delivery_tag?.label} />
                    {
                        (props?.savings_tag?.length > 0) &&
                        <HighLight label={props.savings_tag} />
                    }
                </View>

                <View style={styles.priceBox}>
                    <View>
                        <Text style={styles.priceText}>Weekly Price: {props.weekly_price}</Text>
                        <Text style={styles.priceText}>Monthly Price: {props.monthly_price}</Text>
                    </View>
                    <Text style={FontStyle.regular}>
                        <Text style={FontStyle.bold}>{props.price}</Text>
                        {props.price_suffix}
                    </Text>
                </View>
            </View>
        </View>
    );
});

const Slide = memo((props: CarType) => {
    return (
        <View style={styles.fullWidthFlex} >
            <Swiper
                nestedScrollEnabled={true}
                height={IMAGE_HEIGHT}
                activeDotColor={Colors.white}
                dotColor={Colors.gray}
                paginationStyle={styles.pagination}
                loop={false}>
                {
                    props.images.map((item, index) => {
                        return (
                            <AppImage
                                key={`SlideImage${index}`}
                                resizeMode="cover"
                                style={styles.img}
                                source={{ uri: IMAGE_URL }}
                            />
                        );
                    })}
            </Swiper>

            <View style={styles.likeBox}>
                <Image source={Icons.ic_wishlist} tintColor={Colors.black} style={styles.like} />
            </View>
            {
                props?.host_tag &&
                <View style={[styles.tag,{backgroundColor:props.host_tag.background_color}]}>
                    <Text style={[FontStyle.title, { fontSize: moderateScale(10), color:props.host_tag.text_color }]} >{props.host_tag?.value}</Text>
                </View>
            }
        </View>
    );
});

interface HighLightPropType {
    label: string;
    labelStyle?: TextStyle;
}

const HighLight = ({ label, labelStyle }: HighLightPropType) => {
    return (
        <View style={styles.highlightContainer}>
            <Text style={[styles.highlightText, labelStyle]}>
                <Entypo name="star" color={Colors.primary} size={moderateScale(10)} /> {label}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fullWidthFlex: {
        flex: 1,
        width: '100%',
    },
    container: {
        width: Size.screenWidth * 0.85,
        marginVertical: moderateScale(10),
        marginHorizontal: moderateScale(10),
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        elevation: 2,
    },
    img: {
        width: '100%',
        height: IMAGE_HEIGHT,
        backgroundColor: Colors.borderColor,
    },
    detailBox: {
        paddingTop: '1%',
        paddingHorizontal: moderateScale(10),
    },
    name: {
        color: Colors.darkBlack,
        fontSize: moderateScale(14),
    },
    highlights: {
        flexDirection: 'row',
        paddingVertical: moderateScale(10),
        gap: moderateScale(10),
    },
    highlightContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.08)',
        borderRadius: moderateScale(30),
        paddingVertical: moderateScale(2),
    },
    highlightText: {
        ...FontStyle.titleSemibold,
        fontSize: moderateScale(10),
        paddingLeft: moderateScale(5),
        paddingRight: moderateScale(7),
    },
    highlightBold: {
        color: Colors.primary,
        fontFamily: Fonts.bold,
    },
    priceBox: {
        borderTopWidth: moderateScale(1),
        borderTopColor: Colors.borderColor,
        paddingVertical: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceText: {
        ...FontStyle.regular,
        fontSize: moderateScale(11),
    },
    likeBox: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        position: 'absolute',
        padding: moderateScale(5),
        margin: moderateScale(10),
        borderRadius: moderateScale(20),
        right: 0,
    },
    tag: {
        backgroundColor: Colors.primary,
        paddingVertical: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        margin: moderateScale(10),
        borderRadius: moderateScale(5),
        position: 'absolute',
        left: 0,
    },
    like: {
        width: moderateScale(15),
        height: moderateScale(15),
    },
    pagination: {
        bottom: '5%',
    },
});

export default Card;
