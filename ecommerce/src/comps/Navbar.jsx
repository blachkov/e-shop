import { Badge } from '@material-ui/core'
import { AddShoppingCart, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 20px;
`

const Menu = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-right: 25px;
`

const Center = styled.div`
    flex: 1;
    font-size: 20px;
    text-align: center;
`

const SiteLogo = styled.h1`
    font-size: 30px;
`

const Right = styled.div`
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    margin-right: 10px;
    padding: 3px;
    display: flex;
    align-items: center;
    border: 1px solid black;
`
const SearchInput = styled.input`
    align-items: center;
    border: none;
    font-size: 20px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Menu>Sing in</Menu>
            <Menu>Register</Menu>
            <Menu>
                <Badge badgeContent={1} color="primary">
                <AddShoppingCart color="action" />
                </Badge>
            </Menu>
        </Left>
        <Center>
            <SiteLogo>LOGO</SiteLogo>
        </Center>
        <Right>
            <SearchContainer>
                <SearchInput placeholder="Search"/>
                <Search/>
            </SearchContainer>
        <Language>BG</Language>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar