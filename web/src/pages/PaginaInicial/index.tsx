import { Container } from "@mui/material";
import Banner from "./Banner";
import Atividades from "./Atividades";
import Depoimentos from "./Depoimentos";
import Pesquisa from "./Pesquisa";

export default function PaginaInicial() {
  return(
    <>
      <Banner />
      <Container>
        <Pesquisa />
        <Atividades />
        <Depoimentos />
      </Container>
    </>
  )
}