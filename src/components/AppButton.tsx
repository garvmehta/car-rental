
import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useMemo } from 'react';
import { Colors } from '../config/colors.config';
import { moderateScale } from 'react-native-size-matters';
import { Fonts } from '../config/font.config';


export interface AppButtonPropsType {
    btnstyle?:  ViewStyle;
    label: String;
    textStyle?: TextStyle,
    loading: boolean
    onClick(data: any): void,
    loaderColor?: string
    icon?: any,
    activeOpacity?:number
}

const AppButton = (props: AppButtonPropsType) => {
    // const UserStrore = useSelector((state: RootState) => state.user.data);
    // const themeColor = getThemeColorByUserType(UserStrore.currentAccType);
    const { btnstyle, label, textStyle, loading } = useMemo(() => {
        return props;
    }, [props]);
    return (
        <TouchableOpacity activeOpacity={props.activeOpacity} style={[{ backgroundColor: Colors.primary }, { ...style.btn, ...btnstyle }]} onPress={(data) => (!loading) && props.onClick(data)} >
            {
                (loading) ? <ActivityIndicator size={20} style={style.marginHorzontal} animating={loading} color={(props.loaderColor) ? props.loaderColor : 'white'} /> :
                    <>
                        {props.icon}

                        <Text style={[style.textStyle, textStyle]} >{label}</Text>
                        {/* <Text style={[{ ...style.textStyle }, textStyle]} variant={'titleLarge'} children={label} /> */}
                    </>
            }


        </TouchableOpacity>

    );
};
const style = StyleSheet.create({
    btn: {
        minWidth: 100,
        minHeight: moderateScale(48),
        paddingVertical: 12,
        borderRadius: moderateScale(40),
        elevation: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: Fonts.semibold,

    },
    marginHorzontal:{ marginHorizontal: 10 },
});
export default AppButton;


