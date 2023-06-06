const Missao = () => {
  return (
    <>
      <NavBar />
      <h1>Missao</h1>
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
    </>
  );
};
export default Missao;
