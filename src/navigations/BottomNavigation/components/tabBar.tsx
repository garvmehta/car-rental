import React, { memo, useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { Colors } from '../../../config/colors.config';
import { Size, Spacing } from '../../../config/size.config';
import { moderateScale } from 'react-native-size-matters';
import { Fonts } from '../../../config/font.config';
import { Tabs } from '..';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TabBar: React.FC<BottomTabBarProps> = memo(({
    state,
    navigation,
}) => {
    const acitveIndex = useMemo(() => {
        return state.index;
    }, [state.index]);


    const handlePress = (routeName: string,) => {
        navigation.navigate(routeName); // Navigate to the selected route
    };

    return (
        <>
        <View style={styles.bottomNavigation}>
            {
                Tabs.map((item, index) => {
                    const route = state.routes[index];
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={styles.zIndexOne}
                            onPress={() => handlePress(route.name)}

                        >
                            <TabItem {...item} isActive={acitveIndex === index} />
                        </TouchableOpacity>
                    );
                })
            }
        </View>
        </>
    );
});


export interface TabIconProps {
    label: string,
    icon: string,
    activeIcon?: string,
    isActive?: boolean,
    isStartIndex?: boolean
    isLastIndex?: boolean
}

const TabItem = (props: TabIconProps) => {
    const { label, isActive = false } = props;
    return (
        <>
            <View style={[styles.contianer]} >
                <AntDesign name={props.icon}  color={isActive ? Colors.primary : Colors.darkBlack}  size={moderateScale(21)} />
                <Text style={[styles.labelStyle, { color: (isActive) ? Colors.primary : Colors.darkBlack }]} >
                    {label}
                </Text>
            </View>

        </>
    );
};



const styles = StyleSheet.create({
    bottomNavigation: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        height: Spacing.bottomSpace + moderateScale(55),
    },
    contianer: {
        alignItems: 'center',
        height: '100%',
        width: Size.screenWidth / 4,
        position: 'relative',
        justifyContent: 'space-between',
        paddingTop: moderateScale(8),
        paddingBottom: Spacing.bottomSpace,

    },

    labelStyle: {
        fontFamily: Fonts.semibold,
        fontSize: moderateScale(9),
        marginVertical: moderateScale(4),
    },
    activeBallBox: {
        width: Size.screenWidth / 4,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        position: 'absolute',

    },
    activeBall: {
        width: '80%',
        height: '80%',
        borderRadius: moderateScale(60),
        backgroundColor: Colors.primary,

    },
    whiteBall:{
        width: moderateScale(55),
        height: moderateScale(55),
        borderRadius: moderateScale(55),
        backgroundColor: Colors.white,
        top: '-40%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    zIndexOne:{ zIndex: 2 },
});




export default TabBar;
