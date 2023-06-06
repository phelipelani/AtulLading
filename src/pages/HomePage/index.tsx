import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselStyled, ConteinerStaly, MainStyled } from "./styles";
import { useEffect, useState } from "react";
import Banner1 from "../../assets/banner 1.png";
import Banner2 from "../../assets/banner 2.jpeg";
import Banner3 from "../../assets/banner 3.jpg";
import NavBar from "../../components/header";


const Home = () => {
  
    const element = document.getElementById("nav");
  
    if (element && element.classList.contains("open")) {
      console.log("A classe está definida");
    } else {
      console.log("A classe não está definida");
    }
  



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

  const slides = [
    {
      image: Banner1,
      text: "Síndico profissional: Soluções eficientes para uma administração tranquila do seu condomínio",
    },
    {
      image: Banner2,
      text: "Confie seu condomínio a profissionais especializados em administração condominial.",
    },
    {
      image: Banner3,
      text: "A escolha certa para uma gestão transparente e profissional do seu condomínio.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % slides.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Muda o slide a cada 5 segundos
    return () => clearInterval(timer);
  }, [currentSlideIndex, nextSlide]);

  const prevSlide = () => {
    setCurrentSlideIndex(
      (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <>
      <NavBar />
      <ConteinerStaly >
        <MainStyled>
          <CarouselStyled>
            <div className="carousel">
              <button className="prev-button" onClick={prevSlide}>
                Anterior
              </button>
              <div className="slide-container">
                <img
                  src={slides[currentSlideIndex].image}
                  alt={slides[currentSlideIndex].text}
                />
                <div className="slide-text">
                  {slides[currentSlideIndex].text}
                </div>
              </div>
              <button className="next-button" onClick={nextSlide}>
                Próxima
              </button>
            </div>
          </CarouselStyled>
        </MainStyled>

        {/* Renderizar o elemento de carregamento quando estiver carregando mais conteúdo */}
        {loading && <div>Carregando...</div>}
      </ConteinerStaly>
    </>
  );
};

export default Home;
