import {Link} from "react-router-dom"
import styled from "styled-components";

const Navbar = () => {
    return(
        <>
            <Nav>
                <LinkBtn to='login' color={'purple'}>Login</LinkBtn>
                <LinkBtn to='signup' color={'mediumpurple'}>Signup</LinkBtn>
            </Nav>        
        </>

    )
}

export default Navbar;

const Nav = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-end;
    background-color: orange;
`

const LinkBtn = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color : white;
    margin-left: 5px;
    background-color: ${props => props.color};
    border-radius: 5px;

    &:hover{
        background-color: darkviolet;
    }
`