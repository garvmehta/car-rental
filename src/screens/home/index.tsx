import  {  useMemo } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import Header from './components/header';
import Card from '../../components/AppComponents/card';
import { moderateScale } from 'react-native-size-matters';
import CategorySection from '../../components/CategorySections';
import HomeData from '../../mock/home.json';
import { CarsSectionType } from '../../store/interfaces';
import PopularCountries from './components/popularCountries';


const Home = () => {
  const data = useMemo(()=>{
          return HomeData.data;
  },[]);
  return (
    <AppSafeAreaView noPadding>
      <ScrollView>

      <Header banners={data.banners} />
      {
        data.cars_sections.map((item,index)=>{
          // @ts-ignore
          return(<CarSection {...item} key={`CarSection:${index}`}  />);
        })
      }
      <PopularCountries data={data.cities} />
      </ScrollView>
    </AppSafeAreaView>
  );
};


const CarSection = (props:Partial<CarsSectionType>)=>{
  return(
    <CategorySection
        title={props?.title ?? ''}
        titleStyle={styles.title}
        containerStyle={styles.categoryContainer}
      >
        <FlatList
          horizontal
          data={props.cars}
          keyExtractor={(item) => `Car-${item.id}`}
          renderItem={({item}) => <Card {...item}/>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
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

export default Home;
