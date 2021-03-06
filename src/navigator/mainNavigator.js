import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList173518Navigator from '../features/ArticleList173518/navigator';
import ArticleList173517Navigator from '../features/ArticleList173517/navigator';
import ArticleList173516Navigator from '../features/ArticleList173516/navigator';
import ArticleList173499Navigator from '../features/ArticleList173499/navigator';
import ArticleList173498Navigator from '../features/ArticleList173498/navigator';
import ArticleList173497Navigator from '../features/ArticleList173497/navigator';
import ArticleList173480Navigator from '../features/ArticleList173480/navigator';
import ArticleList173479Navigator from '../features/ArticleList173479/navigator';
import ArticleList173478Navigator from '../features/ArticleList173478/navigator';
import BlankScreen14173334Navigator from '../features/BlankScreen14173334/navigator';
import Settings173269Navigator from '../features/Settings173269/navigator';
import UserProfile173262Navigator from '../features/UserProfile173262/navigator';
import Settings173261Navigator from '../features/Settings173261/navigator';
import Settings173259Navigator from '../features/Settings173259/navigator';
import SignIn2173257Navigator from '../features/SignIn2173257/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList173518: { screen: ArticleList173518Navigator },
ArticleList173517: { screen: ArticleList173517Navigator },
ArticleList173516: { screen: ArticleList173516Navigator },
ArticleList173499: { screen: ArticleList173499Navigator },
ArticleList173498: { screen: ArticleList173498Navigator },
ArticleList173497: { screen: ArticleList173497Navigator },
ArticleList173480: { screen: ArticleList173480Navigator },
ArticleList173479: { screen: ArticleList173479Navigator },
ArticleList173478: { screen: ArticleList173478Navigator },
BlankScreen14173334: { screen: BlankScreen14173334Navigator },
Settings173269: { screen: Settings173269Navigator },
UserProfile173262: { screen: UserProfile173262Navigator },
Settings173261: { screen: Settings173261Navigator },
Settings173259: { screen: Settings173259Navigator },
SignIn2173257: { screen: SignIn2173257Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
