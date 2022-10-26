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
import UserProfile from "../components/userProfile/userProfile"
import PushNotifications from "../layout/pushNotifications"
import EventPosts from "../components/eventPosts/eventPosts";
import EventView from "../components/eventView/eventView";
import SignIn from "../views/auth/SignIn";
import SignUpWithSocailLink from "../views/auth/SignUpWithSocialLink";
import SignUp from "../views/auth/SignUp";
import PostTypes from "../components/eventPosts/postTypes/postTypes";
import CompleteKyc from "../components/kyc/CompleteKyc"
import AccountDetails from "../components/kyc/AccountDetails"
import ImageVerification from "../components/kyc/ImageVerification"
import IdCardVerification from "../components/kyc/IDCardVerification"
import PassportVerification from "../components/kyc/PassportVerification"
import Success from "../components/kyc/Success"

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
		path: '/user/userProfile',
		component: UserProfile,
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
	},
	{
		path: '/kyc/complete',
		component: CompleteKyc,
		layout: 'kyc'
	},
	{
		path: '/kyc/accountDetails',
		component: AccountDetails,
		layout: 'Kyc'
	},
	{
		path: '/kyc/imageVerification',
		component: ImageVerification,
		layout: 'Kyc'
	},
	{
		path: '/kyc/IdCardVerification',
		component: IdCardVerification,
		layout: 'kyc'
	},
	{
		path: '/kyc/PassportVerification',
		component: PassportVerification,
		layout: 'Kyc'
	},
	{
		path: '/kyc/success',
		component: Success,
		layout: 'Kyc'
  },
]