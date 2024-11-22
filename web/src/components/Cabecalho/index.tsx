import styled from 'styled-components';
import logo from './assets/logo.png';
import buscaImg from './assets/search.png';
import perfil from './assets/perfil.png';
import { useState } from 'react';
import Botao from '../Botao';
import CampoDigitacao from '../CampoDigitacao';
import autenticaStore from '../../stores/autentica.store';

const CabecalhoEstilizado = styled.header`
display:flex;
align-items: center;
justify-content: space-between;
padding: 2em 4em
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-grow: .1;
`

interface WeightCustomizado{
weight: number
}

const LinkEstilizado = styled.a<WeightCustomizado>`
 color: var(--azul-escuro);
 font-weight: ${({weight}) => weight};
 text-decoration: none;
`

interface SearchImage{
imagem?: string 
}

const InputPersonalizado = styled.input<SearchImage>`
height: 41px;
width: 100%;
border: 1px solid #90989F;
border-radius: 8px;
background-image: url(${props => props.imagem});
background-repeat: no-repeat;
background-position: 97% center;
padding: 0 20px;
`

const ContainerLogado = styled.header`
width: 40%;
display: flex;
align-items: center;
justify-content: space-around;
gap: 30px;
white-space: nowrap;
`

const BotaoEstilizado = styled.a`
background-color: var(--azul-escuro);
border-radius: 8px;
padding: 12px 16px;
color: var(--branco);
text-decoration: none;
`

function Cabecalho() {
    const [busca, setBusca] = useState('')
    const handleLogout= () => {
        autenticaStore.logout();
    }
    return (
        <>
            <CabecalhoEstilizado>
                <img src={logo} alt="logo da empresa Voll" />
                {autenticaStore.estaAutenticado ?
                    <Container>
                        <img src={perfil} alt="imagem de perfil do usuário" />
                        <LinkEstilizado weight={700} onClick={handleLogout} href="/">Sair</LinkEstilizado>
                    </Container>
                :
                    <ContainerLogado>
                        <LinkEstilizado weight={400} href="/sobre">Sobre</LinkEstilizado>
                        <LinkEstilizado weight={400} href="/cadastro">Cadastre-se</LinkEstilizado>
                        <InputPersonalizado placeholder='Digite sua busca' imagem={buscaImg} value={busca}></InputPersonalizado>
                        <BotaoEstilizado href="/login">Login</BotaoEstilizado>
                    </ContainerLogado>
                }
            </CabecalhoEstilizado>

        </>
    )
}

export default Cabecalho;