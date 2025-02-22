import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReactNode } from 'react';
import Home from '../../screens/home';
import TabBar, { TabIconProps } from './components/tabBar';


const Tab = createBottomTabNavigator();
const CustomTabBar = (props:BottomTabBarProps) => <TabBar {...props} />;

function BottomNavigation() {
    return (
        <Tab.Navigator
            tabBar={CustomTabBar}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
            }}


        >
            {
                Tabs.map((item) => {
                    return (
                        <Tab.Screen key={item.name} name={item.name} component={item.component}
                            initialParams={item.initialParams}
                        />
                    );
                })
            }
        </Tab.Navigator>
    );
}
interface TabType extends TabIconProps {
    name: string;
    component: (props: any) => JSX.Element | ReactNode;
    initialParams?: any
}
export const Tabs: Array<TabType> = [
    {
        name: 'Search',
        component: Home,
        label: 'SEARCH',
        icon: 'search1',
    },
    {
        name: 'BOOKINGS',
        component: Home,
        label: 'BOOKINGS',
        icon: 'key',
    },
    {
        name: 'MESSAGES',
        component: Home,
        label: 'MESSAGES',
        icon: 'message1',
    },
    {
        name: 'Host',
        component: Home,
        label: 'HOST',
        icon: 'car',
    },



];
export default BottomNavigation;
