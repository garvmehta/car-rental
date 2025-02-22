import  { useMemo } from 'react';
import {  View, StyleSheet } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../config/colors.config';
import {  Spacing } from '../../../config/size.config';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/MainNavigation/models';

const Search = () => {
  const Nav = useNavigation<NavigationProp<RootStackParamList>>();
  const SearchIcon = useMemo(() => (
    <Fontisto name="search" size={moderateScale(12)} color={Colors.primary} style={{padding:moderateScale(5)}} />
  ), []);

  return (
    <View style={styles.container}>
      <SearchBar
        placholder=""
        label="Enter your city address, airport or hotle"
        labelStyle={styles.labelStyle}
        type="block"
        right={<></>}
        containerStyle={styles.searchBarContainer}
        left={SearchIcon}
        onClick={()=>{
          Nav.navigate('Searching');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
    top:0,
     left:0,
     zIndex:2,
     paddingTop: (Spacing.topSpace ?? 0) * 1.1,
  },
  searchBarContainer: {
    width: '95%',
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(100),
    backgroundColor: Colors.white,
  },
  labelStyle: {
    color: Colors.gray,
    fontSize: moderateScale(12),
    paddingHorizontal: moderateScale(8),
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
