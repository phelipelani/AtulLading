import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "../../assets/Logo.png";
import {
  ButtonNav,
  ContainerHeaderStyled,
  DivLogo,
  HeaderStyled,
  MidiaStyled,
  NavStyled,
  SociaisMidiasStyled,
} from "./styles";
import { useCarrocelState, useMenuState } from "../../pages/menu";

const NavBar = () => {
  const { isMenuActive, setIsMenuActive } = useMenuState();
  const { isCarrocel, setIsCarrocel } = useCarrocelState();

  function openWhatsApp() {
    const phoneNumber = "+5512978131357"; // Insira o número de telefone com o código do país, sem espaços ou caracteres especiais
    const message = "Olá! Gostaria de conversar!"; // Saudação predefinida
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
    setIsCarrocel(!isCarrocel);
  };

  return (
    <>
      <HeaderStyled>
        <SociaisMidiasStyled>
          <BsFillTelephoneOutboundFill className="wppIcons fone" />
          <a href="tel:+5512978131357">(12) 3883 - 8005</a>
          <IoLogoWhatsapp onClick={openWhatsApp} className="wppIcons wpp" />
          <h5 onClick={openWhatsApp}>(12) 9 8300 - 3611</h5>
          <RiInstagramFill className="wppIcons insta" />
        </SociaisMidiasStyled>

        <ContainerHeaderStyled>
          <DivLogo>
            <img src={Logo} alt="Logo Atual" />
          </DivLogo>

          <MidiaStyled>
            <NavStyled
              id="nav"
              className={`navList ${isMenuActive ? "open" : ""}`}
            >
              <ButtonNav to="/">Home</ButtonNav>
              <ButtonNav to="/quemsomos">Quem Somos</ButtonNav>
              <ButtonNav to="/missao">Nossos Objetivos</ButtonNav>
              <ButtonNav to="/contato">Entrar em Contato</ButtonNav>
            </NavStyled>
          </MidiaStyled>
          <div
            className={`mobileMenu ${isMenuActive ? "open" : ""}`}
            onClick={handleMenuToggle}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </ContainerHeaderStyled>
      </HeaderStyled>
    </>
  );
};

export default NavBar;
