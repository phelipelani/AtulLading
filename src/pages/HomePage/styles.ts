import styled from "styled-components";

export const TextStyled = styled.div`
  height: 60%;
  p {
  }
  .banner {
    height: 100%;
    width: 80%;
    object-fit: cover;
  }
`;

export const ConteinerStaly = styled.div`
  width: 90%;
  margin: 0.5rem auto;
`;

export const MainStyled = styled.main`
  width: 100%;
`;
export const CarrosselContainer = styled.div`
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  background-color: black;

  &.menu-active {
    width: 80%;
  }

  .carousel-root {
    width: 100%;
    box-sizing: border-box;
  }
`;





export const CarouselStyled = styled.div` 
.carousel {
 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;

  &.menu-active {
    width: 80%;
  }
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.slide-container {
  position: relative;
  width: 100%;
  height: 30vw;
}

.slide-container img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  opacity:0.8;
}

.slide-text {
  position: absolute;
  bottom: 60%;
  left: 20px;
  color: white;
  background:rgba(49, 29, 59, 0.5);
  font-size: 2rem;
  animation: fadeInOut 6s infinite;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  16.66% {
    opacity: 1;
    transform: translateY(0);
  }
  83.33% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

@media (max-width: 768px) {
  .slide-text {
    font-size: 18px;
    bottom: 10px;
    left: 10px;
  }
}

`


