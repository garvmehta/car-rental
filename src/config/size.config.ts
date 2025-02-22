import { Dimensions, Platform, StatusBar } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const uiDesignMinCompatibleDeviceWidth = 375; // iPhone SE (2nd Generation)
// const uiDesignMinCompatibleDeviceHeight = 667; // iPhone SE (2nd Generation)

export const Size = {
    screenWidth:Dimensions.get('screen').width,
    screenHeight:Dimensions.get('screen').height,
};

const TopSpace = (Platform.OS === 'ios') ? (Size.screenWidth > uiDesignMinCompatibleDeviceWidth) ? (Size.screenWidth * 0.13) : (Size.screenHeight * 0.05) : StatusBar.currentHeight;
export const Spacing = {
    topSpace:TopSpace,
    bottomSpace:(Size.screenWidth > uiDesignMinCompatibleDeviceWidth) ? 20 : moderateScale(20),
};



