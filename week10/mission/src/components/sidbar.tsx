import {Link} from "react-router-dom"
import styled from "styled-components";

const SideBar = () => {
    return(
        <SideBarArea>
            <LinkBtn to={'/'}>Home</LinkBtn>
            <LinkBtn to='/movies'>Movies</LinkBtn>
            <LinkBtn to='/dumy'>Dumy</LinkBtn>
        </SideBarArea>
    )
}

export default SideBar;

const SideBarArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: gray;
    box-sizing: border-box;
`

const LinkBtn = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color : white;
`