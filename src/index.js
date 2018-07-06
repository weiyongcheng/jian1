import {StackNavigator, TabNavigator} from 'react-navigation';

import SplashPage from './pages/SplashPage';
import tabRoute from './TabNavigator';
import FujinPage from './pages/home/FujinPage';
import DuanqiPage from './pages/home/DuanqiPage';
import KuaijiePage from './pages/home/KuaijiePage';
import RemenPage from './pages/home/RemenPage';
import GengduoPage from './pages/home/GengduoPage';
import FankuiPage from './pages/my/FankuiPage';
import ClearPage from './pages/my/ClearPage';
import AboutUsPage from './pages/my/AboutUsPage';
import DetailPage from './pages/home/DetailPage';
import OrderListPage from './pages/my/OrderListPage';
import LoginPage from './pages/auth/LoginPage';
import RenzhengPage from './pages/auth/RenzhengPage';

export default AppRoute = StackNavigator({
    SplashPage: {
        screen: SplashPage
    },
    App: {
        screen: tabRoute
    },
    FujinPage: {
        screen: FujinPage
    },
    DuanqiPage: {
        screen: DuanqiPage
    },
    KuaijiePage: {
        screen: KuaijiePage
    },
    RemenPage: {
        screen: RemenPage
    },
    GengduoPage: {
        screen: GengduoPage
    },
    FankuiPage: FankuiPage,
    ClearPage: ClearPage,
    AboutUsPage: AboutUsPage,
    DetailPage: DetailPage,
    OrderListPage: OrderListPage,
    LoginPage: LoginPage,
    RenzhengPage: RenzhengPage
}, {
    headerMode: 'none',
});