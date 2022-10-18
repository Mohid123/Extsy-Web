import Login from "../views/auth/Login";
import SignUp from "../views/auth/SignUp";
import SignUpUsingEmail from "../views/auth/SignUpUsingEmail";
import GroupAdmin from "../views/GroupAdmin";
import Groups from "../views/Groups";
import Main from "../views/MainView";

export const routes = [
    {
		path: '/',
		component: Main,
		layout: 'main',
	},
	{
		path: '/groups',
		component: Groups,
		layout: 'main',
	},
	{
		path: '/groupadmin',
		component: GroupAdmin,
		layout: 'main',
	},
	{
		path: '/auth/login',
		component: Login,
		layout: 'auth',
	},
	{
		path: '/auth/signup',
		component: SignUp,
		layout: 'auth',
	},
	{
		path: '/auth/signup2',
		component: SignUpUsingEmail,
		layout: 'auth',
	}
]