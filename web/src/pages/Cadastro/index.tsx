import styled from "styled-components"
import logo from "../Cadastro/logo.png"
import { Step, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import CampoDigitacao from "../../components/CampoDigitacao"
import Botao from "../../components/Botao"
import IClinica from "../../types/IClinica"
import usePost from "../usePost"
import { useNavigate } from "react-router-dom"

const ImagemLogo = styled.img`
padding: 2em 0;
`

const ContainerStepper = styled.div`
margin-top: 4em;
width: 20%
`

interface PropsCustomizadas{
  cor: string
}

const StepCustomizado = styled.div<PropsCustomizadas>`
background-color: ${({cor}) => cor };
width: 24px;
height: 24px;
border-radius: 50%;
`

const Titulo = styled.h2`
color: #6B6E71;
font-size: 24px;
padding: 1em;
`

const Formulario = styled.form`
width: 70%;
display: flex;
flex-direction: column;
align-items: center
`

const BotaoEstilizado = styled(Botao)`
width: 30%;
cursor: pointer;
`

const TituloEndereco = styled.p`
color: #0B3B60;
font-weight: 700;
font-size: 16px;
line-height: 20px
`

const ContainerEndereco = styled.div`
display: grid;
width: 100%;
grid-template-columns: 30% 65%;
justify-content: space-between;
padding-bottom: 2em;
`

export default function Cadastro(){
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')

  const [telefone, setTelefone] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [estado, setEstado] = useState('')
  const {cadastrarDados, erro, sucesso} = usePost()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const clinica: IClinica ={
      email: email,
      nome: nome,
      senha: senha,
      endereco:{
        cep: cep,
        rua: rua,
        numero: numero,
        complemento: complemento,
        estado: estado
      }
    }

    if(etapaAtiva !== 0){
      try{
        cadastrarDados({url: 'clinica', dados: clinica})
        navigate('/login')
      }
      catch(erro){
        erro && alert('Erro ao cadastrar os dados')
      }
    }

    setEtapaAtiva(etapaAtiva + 1)

  }
  return (
    <>
      <ImagemLogo src={logo} alt="logo da voll" />
      <ContainerStepper>
        <Stepper activeStep={etapaAtiva}>
          <Step>
            <StepLabel
              StepIconComponent={(props) => (
                <StepCustomizado cor={props.active ? "#85C4FF" : "#E7EBEF"}/>
              )}/>
          </Step>
          <Step>
          <StepLabel
              StepIconComponent={(props) => (
                <StepCustomizado cor={props.active ? "#85C4FF" : "#E7EBEF"}/>
              )}/>
          </Step>
        </Stepper>
      </ContainerStepper>

      {etapaAtiva === 0 ? (
        <>
        <Titulo>Primeiro, alguns dados básicos:</Titulo>
        <Formulario onSubmit={handleSubmit}>
          <CampoDigitacao 
            valor={nome} 
            tipo="text" 
            placeholder="Digite o nome da clínica" 
            onChange={setNome} 
            label="Nome"
          />
          <CampoDigitacao 
            valor={cnpj} 
            tipo="text" 
            placeholder="Digite o CNPJ" 
            onChange={setCnpj} 
            label="CNPJ"
          />
          <CampoDigitacao 
            valor={email} 
            tipo="email" 
            placeholder="Digite o endereço de e-mail para login" 
            onChange={setEmail}
            label="Email"
          />
          <CampoDigitacao 
            valor={senha} 
            tipo="password" 
            placeholder="Digite uma senha" 
            onChange={setSenha} 
            label="Crie uma senha"
          />
          <CampoDigitacao 
            valor={confirmaSenha} 
            tipo="password" 
            placeholder="Repita a senha anterior" 
            onChange={setConfirmaSenha} 
            label="Repita a senha"
          />
        <BotaoEstilizado type="submit">Avançar</BotaoEstilizado>
        </Formulario>
      </>
      ):(
      <>
        <Titulo>Agora, os dados técnicos</Titulo>
        <Formulario onSubmit={handleSubmit}>
          <CampoDigitacao 
            valor={telefone} 
            tipo="tel" 
            placeholder="(00) 0 0000-0000" 
            onChange={setTelefone} 
            label="Telefone"
          />
          <CampoDigitacao 
            valor={cep} 
            tipo="text" 
            placeholder="Insira o CEP" 
            onChange={setCep} 
            label="CEP"
            maxLength={8}
          />
          <TituloEndereco>Endereço</TituloEndereco>
          <CampoDigitacao 
            valor={rua} 
            tipo="text" 
            placeholder="Rua"
            onChange={setRua}
          />
          <ContainerEndereco>
            <CampoDigitacao 
              valor={numero} 
              tipo="number"
              placeholder="Número"
              onChange={setNumero}
            />
            <CampoDigitacao 
              valor={complemento} 
              tipo="text"
              placeholder="Complemento"
              onChange={setComplemento}
            />
            <CampoDigitacao 
              valor={estado} 
              tipo="text"
              placeholder="Estado"
              onChange={setEstado}
            />
          </ContainerEndereco>
          <BotaoEstilizado type="submit">Cadastrar</BotaoEstilizado>
        </Formulario>
      </>
    )}
  </>
)}