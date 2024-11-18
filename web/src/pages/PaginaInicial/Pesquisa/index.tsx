//Arquivo index.tsx dentro da pasta Pesquisa

import styled from "styled-components"
import pesquisa from './assets/search.png';
import pin from './assets/pin.png'


interface Props {
    imagem?: string,
}

const CampoDigitacao = styled.input<Props>`
padding: 16px 0px 16px 45px;
background-image: url('${props => props.imagem === 'pesquisa' ? pesquisa : pin}');
background-repeat: no-repeat;
background-color: #EDEDED;
background-position: 15px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 40%;
::placeholder {
    color: #6B6E71;
    font-family: var(--fonte-principal);
    background-color: #F8F8F8;
}
`

const Container = styled.section`
background: var(--branco);
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
border-radius: 8px;
padding: 2em 5em;
text-align: center;
margin: 3em 0;
`

const Botao = styled.button`
padding: 12px 16px;
background-color: var(--azul-escuro);
border-radius: 8px;
border: none;
color: var(--branco);
`

const ContainerFormulario = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

const Titulo = styled.h2`
font-family: var(--fonte-principal);
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: var(--cinza);
`

const Lista = styled.ul`
display: flex;
justify-content: space-around;
`

const ItemLista = styled.li`
background-color: var(--cinza-claro);
color: var(--cinza);
padding: 4px 8px;
margin: 0 8px;
list-style-type: none;
font-size: 14px;
line-height: 16px;
border-radius: 4px;
:after {
    margin-left: 10px;
    content: 'x';
}
`

export default function Pesquisa() {
    return (
        <Container>
            <ContainerFormulario>
                <CampoDigitacao placeholder={'Digite a especialidade'} imagem={'pesquisa'} />
                <CampoDigitacao placeholder={'Digite sua localização'} imagem={'pin'} />
                <Botao>Buscar</Botao>
            </ContainerFormulario>
            <Titulo>Você pode estar procurando por estas categorias:</Titulo>
            <Lista>
                <ItemLista>Neurologista</ItemLista>
                <ItemLista>Dermatologista</ItemLista>
                <ItemLista>Cardiologista</ItemLista>
                <ItemLista>Ortopedista</ItemLista>
                <ItemLista>Oftalmologista</ItemLista>
                <ItemLista>Pediatria</ItemLista>
                <ItemLista>Reumatologista</ItemLista>
            </Lista>
        </Container>
    )
}