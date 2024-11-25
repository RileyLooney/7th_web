import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../comonents/navbar";
import SideBar from "../comonents/sidebar";

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