import { useMemo, useRef } from 'react';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import Search from './components/search';
import {  StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, FlatList } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../config/colors.config';
import SearchData from '../../mock/search.json';
import Card from '../../components/AppComponents/card';
import GoogleMap from './components/googleMap';
const Searching = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const data = useMemo(() => {
        return SearchData.data;
    }, []);

    return (
        <AppSafeAreaView bgColor={Colors.white} noPadding={true}>
            <Search />
            <GestureHandlerRootView style={styles.container}>
            <GoogleMap/>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    // index={2} // Start at the highest snap point
                    snapPoints={[moderateScale(40),'120%']}
                    handleIndicatorStyle={styles.inditcator}
                    backgroundStyle={styles.bg}
                    enableContentPanningGesture={false}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <FlatList
                            data={data.cars}
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}
                            keyExtractor={(item) => `Car-${item.id}`}
                            // @ts-ignore
                            renderItem={({ item }) => <Card {...item} containerStyle={styles.cardBox} />}
                        />
                        <View style={styles.spacer} />
                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        </AppSafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:1,
    },
    contentContainer: {
        flex: 1,
    },
    inditcator: {
        marginVertical:moderateScale(10),
        width: '20%',
        height:moderateScale(5),
        backgroundColor: Colors.gray,
    },
    cardBox:{
        width:'92%',
        alignSelf:'center',
    },
    spacer:{
        width:'100%',
         height:moderateScale(20),
    },
    bg:{ borderTopLeftRadius:0, borderTopRightRadius: 0 },
});
export default Searching;
