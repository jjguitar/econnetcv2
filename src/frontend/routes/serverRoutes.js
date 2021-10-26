import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import Experiences from '../pages/Experiences';
import CreateAccount from '../pages/CreateAccount';
import NotFound from '../pages/NotFound';

const serverRoutes  = [
    {
      exact: true,
      path: '/',
      component: Home,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/signup',
      component: CreateAccount,
    },
    {
      exact: true,
      path: '/password-recovery',
      component: PasswordRecovery,
    },
    {
      exact: true,
      path: '/experiences',
      component: Experiences,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];

export default serverRoutes;