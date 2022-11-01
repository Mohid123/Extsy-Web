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
import P2pSellUsdt from "../components/p2pBuyer/p2pSellUSDT";
import P2pBuyer from "../components/p2pBuyer/p2pBuyer";
import MarketPlace from "../components/Nft/NftMarketPlace"
import MarketPlace2 from "../components/Nft/NftMarketPlace2"
import Properties from "../components/Nft/NftProperties"
import BuyerUSDT from "../components/p2pBuyer/buyer/buyerUSDT";
import CancelOrder from "../components/p2pBuyer/buyer/cancelOrder";


export const routes = [
    {
		path: '/',
		component: Main,
		layout: 'main',
	},
	{
		path: '/p2pbuyer',
		component: P2pBuyer,
		layout: 'main',
	},
	{
		path: '/p2pbuyer/buyerusdt',
		component: BuyerUSDT,
		layout: 'main',
	},
	{
		path: '/p2pbuyer/cancelorder',
		component: CancelOrder,
		layout: 'main',
	},
	{
		path: '/p2pbuyer/p2psellusdt',
		component: P2pSellUsdt,
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
		layout: 'kyc'
	},
	{
		path: '/kyc/imageVerification',
		component: ImageVerification,
		layout: 'kyc'
	},
	{
		path: '/kyc/IdCardVerification',
		component: IdCardVerification,
		layout: 'kyc'
	},
	{
		path: '/kyc/PassportVerification',
		component: PassportVerification,
		layout: 'kyc'
	},
	{
		path: '/kyc/success',
		component: Success,
		layout: 'kyc'
  },
  {
	path: '/nft/marketplace',
	component: MarketPlace,
	layout: 'main'
	},
	{
		path: '/nft/marketplace2',
		component: MarketPlace2,
		layout: 'main'
		},
	{
		path: '/nft/properties',
		component: Properties,
		layout: 'main'
		},
]