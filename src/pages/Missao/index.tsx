import { Carousel } from "react-responsive-carousel";
import { CarrosselContainer, TextStyled } from "../HomePage/styles";
import Banner1 from "../../assets/banner 1.png";
import Banner2 from "../../assets/banner 2.jpeg";
import Banner3 from "../../assets/banner 3.jpg";
import NavBar from "../../components/header";
import { useMenuState } from "../menu";

const Missao = () => {
  const { isMenuActive } = useMenuState();

  const renderIndicator = (
    onClickHandler: React.EventHandler<
      React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>
    >,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    if (isSelected) {
      return (
        <li
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "white",
            margin: "0 4px",
            cursor: "pointer",
          }}
          aria-label={`Slide ${index + 1}`}
          title={`${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "white",
          opacity: 0.6,
          margin: "0 4px",
          cursor: "pointer",
        }}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <>
      <NavBar />
      <h1>Missao</h1>
      <CarrosselContainer className={isMenuActive ? "menu-active" : ""}>
        <Carousel
          showArrows={true}
          autoPlay
          interval={5000}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          emulateTouch
          infiniteLoop
          renderIndicator={renderIndicator} // Adicione esta propriedade
        >
          <TextStyled>
            <img className="banner" src={Banner1} alt="Imagem 1" />
            <p className="legend">Texto sobre a imagem 1</p>
          </TextStyled>
          <TextStyled>
            <img className="banner" src={Banner2} alt="Imagem 2" />
          </TextStyled>
          <TextStyled>
            <img className="banner" src={Banner3} alt="Imagem 3" />
            <p className="legend">Texto sobre a imagem 3</p>
          </TextStyled>
        </Carousel>
      </CarrosselContainer>
    </>
  );
};

export default Missao;
