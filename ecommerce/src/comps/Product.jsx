import styled from "styled-components"
import {ShoppingCartOutlined} from "@material-ui/icons"
import {SearchOutlined} from "@material-ui/icons"
import {FavoriteBorderOutlined} from "@material-ui/icons"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 3;
  display:flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;
`

const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbf5;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition:all 0.5s ease;
  &:hover{
    background-color: #f5fbf5;
    transform: scale(1.2);
  }
  cursor:pointer;
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
            <Icon>
            <SearchOutlined/>
            </Icon>
            <Icon>
            <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product