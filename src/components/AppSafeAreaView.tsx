import { ReactNode, useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import AppBar from './AppBar';
import { Colors } from '../config/colors.config';
import {  Spacing } from '../config/size.config';
import { moderateScale } from 'react-native-size-matters';

interface AppSafeAreaViewProps {
  children: ReactNode;
  title?: string;
  bgColor?: string;
  noPadding?: boolean;
  containerStyle?: ViewStyle;
  appBarContainerStyle?: ViewStyle;
  backButtonIconColor?: string;
  bottomViewBgColor?: string;
  footerComponent?: ReactNode;
  actionComponents?: ReactNode;
  onBackPress?: () => void;
}

const AppSafeAreaView: React.FC<AppSafeAreaViewProps> = ({
  children,
  title,
  bgColor = Colors.bgColor,
  noPadding = false,
  containerStyle,
  appBarContainerStyle = { backgroundColor: Colors.bgColor },
  backButtonIconColor = Colors.black,
  bottomViewBgColor = Colors.bgColor,
  footerComponent,
  actionComponents,
  onBackPress,
}) => {
  const flexOneWithBg = useMemo(() => ({ flex: 1, backgroundColor: bgColor }), [bgColor]);

  const titleStyle = useMemo(
    () => ({
      paddingTop: Platform.OS === 'android' ? '12%' : Spacing?.topSpace ?? 0,
      paddingHorizontal: moderateScale(14),
    }),
    []
  );


  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <View style={flexOneWithBg}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidViewStyle}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={[styles.safeViewStyle, { backgroundColor: bgColor }]}>
            {title && (
              //@ts-ignore
              <View style={[titleStyle, appBarContainerStyle]}>
                <AppBar
                  backIconColor={backButtonIconColor}
                  title={title}
                  onBackPress={onBackPress}
                  actionsComponents={actionComponents}
                />
              </View>
            )}
            <View style={[styles.contentContainer, noPadding && styles.noPadding, containerStyle]}>
              {children}
            </View>
            {footerComponent}
          </View>
        </KeyboardAvoidingView>

        {/* Bottom Safe Area View for iOS */}
        {Platform.OS === 'ios' && <View style={[styles.bottomView, { backgroundColor: bottomViewBgColor }]} />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    position: 'relative',
  },
  keyboardAvoidViewStyle: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(14),
    overflow: 'hidden',
  },
  noPadding: {
    paddingHorizontal: 0,
  },
  bottomView: {
    height: Spacing.bottomSpace,
    width: '100%',
  },
});

export default AppSafeAreaView;
