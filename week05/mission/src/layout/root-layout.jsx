import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar";
import SideBar from "../components/sidbar";

const RootLayout = () => {
    return(
        <>
            <Navbar/>
            <MainContentArea>
                <SideBar/>
                <OutletArea><Outlet/></OutletArea> 
            </MainContentArea>            
        </>
    );
}

export default RootLayout;

const MainContentArea = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const OutletArea = styled.div`
    flex: 1;
    box-sizing: border-box;
`