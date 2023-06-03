import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 100vw;
  align-items: center;
  box-shadow: 0 2px 4px rgba(90, 90,00, 1); /* Adicione a sombra desejada aqui */
`;

export const ContainerHeaderStyled = styled.div`
  height: 80%;
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DivLogo = styled.div`
  width: 25%;
  height: 100%;
  background-color: #becfe3;
  border-radius: 8px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const MidiaStyled = styled.div`
  height: 100%;
  padding: 1rem 0.5rem;
`;
export const SociaisMidiasStyled = styled.div`
  background-color: var(--secondary-color);
  height: 20%;
  width: 100%;
  display: flex;
  -webkit-box-pack: end;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  h5 {
    display: flex;
    align-items: flex-end;
    padding-right: 5rem;
    color: var(--primary-color);
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
export const NavStyled = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
`;
export const ButtonNav = styled(Link)`
  color: #fff;
  font-size: 1rem;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 0 1rem;
  :hover {
    opacity: 1;
    transition: 0.3s;
    text-decoration: underline;
  }
`;
