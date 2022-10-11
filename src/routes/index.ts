import Login from "../views/auth/Login";
import SignUp from "../views/auth/SignUp";
import SignUpUsingEmail from "../views/auth/SignUpUsingEmail";
import Main from "../views/MainView";

export const routes = [
    {
		path: '/',
		component: Main,
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