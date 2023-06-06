import styled from "styled-components";
import background from "../../assets/sindico-profissional_BACK_gROUNND.jpg";

export const ContainerMain = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 80vh;
  object-fit:cover;
`;

