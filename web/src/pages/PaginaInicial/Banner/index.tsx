import styled from "styled-components";
import banner from './assets/banner.jpg'


const Banner = styled.section`
  height: 500px;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
`

export default Banner;