import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IconList from './src/components/IconList';
import IconFamilyList from './src/components/IconFamilyList';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    IconFamilyList: {
      screen: IconFamilyList,
    },
    IconList: {
      screen: IconList,
    },
  },
  {
    initialRouteName: 'IconFamilyList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
