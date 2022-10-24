import GroupAddRemoveMembers from "../views/GroupAddRemoveMembers";
import GroupAdmin from "../views/GroupAdmin";
import GroupManageRequest from "../views/GroupManageRequest";
import GroupModerator from "../views/GroupModerator";
import Groups from "../views/Groups";
import GroupUserViewMain from "../views/GroupUserViewMain";
import GroupUserViewMembersList from "../views/GroupUserViewMembersList";
import GroupUserViewModerators from "../views/GroupUserViewModerators";
import Main from "../views/MainView";
import EventAdmin from './../components/eventAdmin/eventAdmin';
import ExploreUser from "../components/userProfile/exploreUser"
import PushNotifications from "../layout/pushNotifications"
import EventPosts from "../components/eventPosts/eventPosts";
import EventView from "../components/eventView/eventView";
import SignIn from "../views/auth/SignIn";
import SignUpWithSocailLink from "../views/auth/SignUpWithSocialLink";
import SignUp from "../views/auth/SignUp";
import PostTypes from "../components/eventPosts/postTypes/postTypes";


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
		path: '/groupadmin/groupmoderator',
		component: GroupModerator,
		layout: 'main',
	},
	{
		path: '/groups/groupuserviewmain',
		component: GroupUserViewMain,
		layout: 'main',
	},
	{
		path: '/groups/groupuserviewmemberslist',
		component: GroupUserViewMembersList,
		layout: 'main',
	},
	{
		path: '/groups/groupuserviewmoderators',
		component: GroupUserViewModerators,
		layout: 'main',
	},
	{
		path: '/auth/signin',
		component: SignIn,
		layout: 'auth',
	},
	{
		path: '/auth/signup',
		component: SignUpWithSocailLink,
		layout: 'auth',
	},
	{
		path: '/auth/signup2',
		component: SignUp,
		layout: 'auth',
	},
	{

		path: '/eventAdmin',
		component: EventAdmin,
		layout: 'main'
	},
	{
		path: '/user/exploreUser',
		component: ExploreUser,
		layout: 'main',
	},
	{
		path: '/pushNotifications',
		component: PushNotifications,
		layout: 'main'
	},
	{
		path: '/eventPosts',
		component: EventPosts,
		layout: 'main'
	},
	{
		path: '/eventView',
		component: EventView,
		layout: 'main'
	},
	{
		path: '/postTypes',
		component: PostTypes,
		layout: 'main'
	}
]