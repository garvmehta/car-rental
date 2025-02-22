import { memo } from 'react';
import { View, Text,  StyleSheet, ScrollView } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import AppImage from '../../../components/AppImage';
import { Fonts } from '../../../config/font.config';
import { Colors } from '../../../config/colors.config';
import { CityType } from '../../../store/interfaces';




export interface CountriesPropType{
  data:Array<CityType>
}
const Countries = ({data}:CountriesPropType)=>{
  return(
    <ScrollView style={styles.padding5} horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        data.map((item,index)=>(<CountryCard {...item} key={`Destination:${index}`} />))
      }
    </ScrollView>
  );
};




const CountryCard = memo(( props:CityType) => {
  return (
    <View style={styles.container}>
        <AppImage source={{uri:props.image}} style={styles.image} />
      <Text style={styles.countryName}>{props.title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  padding5:{paddingTop:'5%' },
  container: {
    marginBottom: moderateScale(10),
    marginHorizontal:moderateScale(7),
    justifyContent:'center',
    height:'auto',
    alignItems:'center',
    backgroundColor:Colors.white,
    elevation:2,
    paddingBottom:moderateScale(10),
    borderRadius:moderateScale(10),
    overflow:'hidden',
  },

  image: {
    width: moderateScale(100),
    height: moderateScale(130),
  },
  countryName: {
    fontSize: moderateScale(14),
    fontFamily:Fonts.semibold,
    marginTop: moderateScale(8),
  },
});

export default Countries;
