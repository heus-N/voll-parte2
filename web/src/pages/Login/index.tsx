import { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";
import logo from "../Login/logo.png"
import styled from "styled-components";
import Botao from "../../components/Botao";
import usePost from "../usePost";
import autenticaStore from "../../stores/autentica.store";
import { useNavigate } from "react-router-dom";

const Formulario = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 70%;
`

const ImagemLogo = styled.img`
padding: 2em;
`

const Titulo = styled.p`
font-size: 24px;
font-weight: 700;
color: #6B6E71
`

const BotaoLogin = styled(Botao)`
width: 40%;
cursor: pointer;
`

const LinkEstilizadoSenha = styled.a`
color: #0B3B60;
padding: 1em 0;
text-decoration: none;
`

const SpanEstilizado = styled.span`
color: #6B6E71;
padding: 1em;
`

const LinkEstizadoCadastro = styled(LinkEstilizadoSenha)`
color: #339CFF;
font-weight: 700;
`

interface ILogin {
  email: string,
  senha: string
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const {cadastrarDados, erro, sucesso, resposta} = usePost();
  const navigate = useNavigate();


  const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usuario: ILogin = {
      email: email,
      senha: senha
    }
    try{
      cadastrarDados({url: 'auth/login', dados: usuario})
      autenticaStore.login({email: email, token: resposta})
      resposta && navigate('/dashboard')
    }catch(erro){
      erro && alert('Não foi possível fazer login')
    }

  }

  return (
    <>
      <ImagemLogo src={logo} alt="voll logo" />
      <Titulo> Faça login em sua conta </Titulo>
      <Formulario onSubmit={handleLogin}>
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
      <BotaoLogin type="submit">Entrar</BotaoLogin>
      </Formulario>
      <LinkEstilizadoSenha href="#">Esqueceu sua senha?</LinkEstilizadoSenha>
      <SpanEstilizado>Ainda não tem conta?
        <LinkEstizadoCadastro href="/cadastro"> Faça seu cadastro!</LinkEstizadoCadastro>
      </SpanEstilizado>
    </>
  )
}