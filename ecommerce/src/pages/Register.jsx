import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://static-cse.canva.com/blob/571508/Patterns303.f9731764.avif");
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 20%;
    background-color: #2e3d40;
    padding 10px;
`
const Title = styled.h1`
    color: white;
    opacity: 1;
    display: flex;
    justify-content: center;
`
const Reg = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 80%;
    margin: 10px 10px 10px 10px;
    padding: 10px;
`
const Button = styled.button`
    flex: 0.7;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Box>
            <Title>Create ACCount</Title>
            <Reg>
                <Input placeholder="FirstName"/>
                <Input placeholder="LastName"/>
                <Input placeholder="Password"/>
                <Input placeholder="RepeatPassword"/>
                <Input placeholder="Email"/>
                <Input placeholder="PhoneNumber"/>
                <Input placeholder="Username"/>
                <Button>Register</Button>
            </Reg>
        </Box>

    </Container>
  )
}

export default Register