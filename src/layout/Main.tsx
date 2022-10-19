import MainViewHeader from "../components/LandingPageHeader";

const MainLayout = ({children}:any) => {
    return ( 
    <div>
        <MainViewHeader/>
        <div className="MainDivCentral">
            {children}
        </div>
    </div> 
    );
}
 
export default MainLayout;