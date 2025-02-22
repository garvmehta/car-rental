import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootStackParamList, Screen } from './models';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import Searching from '../../screens/searching';







const MainNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>();


  return (
    <>
      <NavigationContainer

        theme={{
          ...DefaultTheme, colors: {
            ...DefaultTheme.colors,
          },
        }} >

        <Stack.Navigator

          initialRouteName={'BottomNavigation'}
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            animation:'slide_from_right',
          }}>
          {

            AppStack.map((item, index) => {
              return (
                <Stack.Screen
                  key={index}
                  name={item.name}
                  component={item.screen}
                  initialParams={item.initailParams}
                  options={item.options}

                />
              );
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const AppStack: Array<Screen> = [
   {
    name:'Searching',
    screen:Searching,
   },
   {
    name:'BottomNavigation',
    screen:BottomNavigation,
   },
];



export default MainNavigation;


