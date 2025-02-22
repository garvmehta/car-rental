import  { useMemo } from 'react';
import {  View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../config/colors.config';
import {  Spacing } from '../../../config/size.config';
import { FontStyle } from '../../../config/style.config';
import { Fonts } from '../../../config/font.config';

const Search = () => {
  const SearchIcon = useMemo(() => (
    <Fontisto name="search" size={moderateScale(16)} color={Colors.primary} style={{ paddingLeft:moderateScale(5) ,paddingRight:moderateScale(8)}} />
  ), []);
  const FilterIcon = useMemo(() => (
    <FontAwesome6 name="sliders" size={moderateScale(16)} color={Colors.primary} style={{ paddingLeft:moderateScale(5) ,paddingRight:moderateScale(8)}} />
  ), []);

  const AppliedFilter = useMemo(()=>{
    return(
        <Text style={[FontStyle.regular,{color:Colors.gray, fontSize:moderateScale(8)}]} >Sun 26 Nov - Thu 30 Nov</Text>);
  },[]);

  return (
    <View style={styles.container}>
      <SearchBar
        placholder=""
        label="Jeddah"
        extra={AppliedFilter}
        labelStyle={styles.labelStyle}
        type="block"
        right={FilterIcon}
        containerStyle={styles.searchBarContainer}
        left={SearchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignItems:'center',
    alignSelf:'center',
    paddingBottom:moderateScale(10),
     paddingTop: (Spacing.topSpace ?? 0) * 1.3,
  },
  searchBarContainer: {
    width: '95%',
    height:'auto',
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(100),
    backgroundColor: Colors.white,
    borderWidth:1,
    borderColor:Colors.gray,
  },
  labelStyle: {
    color: Colors.darkBlack,
    fontFamily:Fonts.semibold,
    fontSize: moderateScale(12),
  },
  filterIconContainer: {
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#007BFF66',
    borderRadius: moderateScale(12),
  },
  filterIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
},

});



export default Search;
