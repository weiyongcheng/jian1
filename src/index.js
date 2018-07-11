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
import WaitingPage from './pages/auth/WaitingPage';
import ForgotPage from './pages/auth/ForgotPassword';

export default AppRoute = StackNavigator({
    SplashPage: SplashPage,
    App: tabRoute,
    FujinPage: FujinPage,
    DuanqiPage: DuanqiPage,
    KuaijiePage: KuaijiePage,
    RemenPage: RemenPage,
    GengduoPage: GengduoPage,
    FankuiPage: FankuiPage,
    ClearPage: ClearPage,
    AboutUsPage: AboutUsPage,
    DetailPage: DetailPage,
    OrderListPage: OrderListPage,
    LoginPage: LoginPage,
    RenzhengPage: RenzhengPage,
    WaitingPage: WaitingPage,
    ForgotPage: ForgotPage
}, {
    headerMode: 'none',
});