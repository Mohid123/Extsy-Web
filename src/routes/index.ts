import Login from "../views/auth/Login";
import SignUp from "../views/auth/SignUp";
import SignUpUsingEmail from "../views/auth/SignUpUsingEmail";
import Groups from "../views/Groups";
import Main from "../views/MainView";
import UserProfile from "../components/userProfile/userProfile"
import ExploreUser from "../components/userProfile/exploreUser"
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
	},
	{
		path: '/user/userProfile',
		component: UserProfile,
		layout: 'main',
	},
	{
		path: '/user/exploreUser',
		component: ExploreUser,
		layout: 'main',
	}
]