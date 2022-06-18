import { Facebook, Instagram, Mail, Phone, Room } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
`

const Logo = styled.h1`
    display:flex;
    justify-content: center;
`

const Desc = styled.p`
    margin: 20px 0px;
    
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    border: 1px solid black;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    border: 1px solid black;
`

const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 30px;
    display:flex;
    justify-content: center;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 400px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LOGOHERE</Logo>
            <Desc>If you’ve been thinking of treating yourself to a new summer wardrobe,
                you don’t want to pass on this beautiful summer floral dress.
                There’s no better way to express to yourself than with a new outfit
                that will stand out and turn heads.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>HOME</ListItem>
                <ListItem>CART</ListItem>
                <ListItem>MEN FASHION</ListItem>
                <ListItem>WOMEN FASHION</ListItem>
                <ListItem>NEW COLLECTION</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room/>
                Plovdiv, ul.Kukush 10
            </ContactItem>
            <ContactItem> <Phone/>
                +359897989812
            </ContactItem>
            <ContactItem> <Mail/>
                contactTest@gmail.com
            </ContactItem>
            <Payment src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png"/>
        </Right>
    </Container>
  )
}

export default Footer