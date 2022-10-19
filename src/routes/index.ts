import AddRemoveMemberComp from "../components/groups/groupAdmin/AddRemoveMember/addRemoveMembersComp";
import Login from "../views/auth/Login";
import SignUp from "../views/auth/SignUp";
import SignUpUsingEmail from "../views/auth/SignUpUsingEmail";
import GroupAddRemoveMembers from "../views/GroupAddRemoveMembers";
import GroupAdmin from "../views/GroupAdmin";
import GroupManageRequest from "../views/GroupManageRequest";
import Groups from "../views/Groups";
import Main from "../views/MainView";

import EventAdmin from './../components/eventAdmin/eventAdmin';
import UserProfile from "../components/userProfile/userProfile"
import ExploreUser from "../components/userProfile/exploreUser"
import PushNotifications from "../layout/pushNotifications"

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
		path: '/groupadmin/managerequest',
		component: GroupManageRequest,
		layout: 'main',
	},
	{
		path: '/groupadmin/addremovemembers',
		component: GroupAddRemoveMembers,
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

		path: '/eventAdmin',
		component: EventAdmin,
		layout: 'main'
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
	},
	{
		path: '/pushNotifications',
		component: PushNotifications,
		layout: 'main',
	}
]