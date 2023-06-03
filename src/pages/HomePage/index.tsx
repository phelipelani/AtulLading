import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarrosselContainer,
  ConteinerStaly,
  MainStyled,
  TextStyled,
} from "./styles";
import { useEffect, useState } from "react";
import Banner1 from "../../assets/banner 1.png";
import Banner2 from "../../assets/banner 2.jpeg";
import Banner3 from "../../assets/banner 3.jpg";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollHeight - scrollTop - clientHeight <= 0) {
      loadMoreContent();
    }
  };

  const loadMoreContent = () => {
    setLoading(true);

    // Simulação de carregamento de conteúdo
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <ConteinerStaly>
      <MainStyled>
        <CarrosselContainer>
          <Carousel
            showArrows={true}
            autoPlay
            interval={5000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            emulateTouch
            infiniteLoop
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
      </MainStyled>

      {/* Renderizar o elemento de carregamento quando estiver carregando mais conteúdo */}
      {loading && <div>Carregando...</div>}
    </ConteinerStaly>
  );
};

export default Home;
