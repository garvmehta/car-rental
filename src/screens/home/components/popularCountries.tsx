import {
  StyleSheet,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import CategorySection from '../../../components/CategorySections';
import Countries, { CountriesPropType } from './countries';

const PopularCountries = (props:CountriesPropType) => {

  return (

      <CategorySection
        title="Popular Destinations"
        titleStyle={styles.title}
        containerStyle={styles.categoryContainer}
      >
        <Countries {...props} />
      </CategorySection>

  );
};



const styles = StyleSheet.create({
  title: {
    paddingLeft:moderateScale(5),
    fontSize: moderateScale(16),
  },
  categoryContainer: {
    paddingVertical: 0,
    paddingTop: moderateScale(10),
  },
  listContainer: {
    paddingHorizontal: moderateScale(10),
  },
});



export default PopularCountries;
