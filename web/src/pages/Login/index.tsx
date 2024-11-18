import { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";
import logo from "../../../src/components/Cabecalho/assets/logo.png"
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 70%;
border: 1px solid red;
padding: 32px 0;
`

const Titulo = styled.p`
margin: 3rem;
font-size: 24px;
font-weight: 700;
color: #6B6E71
`

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <Container>
      <img src={logo} alt="voll logo" />
      <Titulo> Faça login em sua conta </Titulo>
      <CampoDigitacao 
        valor={email} 
        tipo="text" 
        placeholder="Insira seu endereço de e-mail" 
        onChange={setEmail} 
        label="E-mail"
      />
      <CampoDigitacao 
        valor={senha} 
        tipo="password" 
        placeholder="Insira sua senha" 
        onChange={setSenha} 
        label="Senha"
      />
    </Container>
  )
}