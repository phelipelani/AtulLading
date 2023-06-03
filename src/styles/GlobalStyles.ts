import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

button{
	cursor: pointer;
}

.wppIcons{
	width: 2rem;
  color: var(--primary-color);
}

.mobileMenu {
  display: none;}

.mobileMenu .line1,
.mobileMenu .line2,
.mobileMenu .line3 {
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 0.3s ease;
}

.open .line1 {
  transform: translateY(8px) rotate(45deg);
}
.open .line2 {
  opacity: 0;
}
.open .line3 {
  transform: translateY(-8px) rotate(-45deg);
}

.navList {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  }





@media (max-width:720px) {

	.mobileMenu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;
  z-index: 10;
}
	

	.navList {
    display: none;
  }
  .navList.open {
	width:25%;
	display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: absolute;
  background: var(--primary-color);
  top: 20vh;
  justify-content: space-around;
  height: 80vh;
	right:0}
  }
  .navList a {
    margin: 10px 0;
  }

	.mobileMenu {
    display: block;
  }	

  .mobileMenu .line1,
  .mobileMenu .line2,
  .mobileMenu .line3 {
    background-color: #fff;
  }
  
.fone:hover{
    color: var(--pure-white);
	cursor:pointer;
}

.wpp:hover{
    color: var(--sucess);
	cursor:pointer;
}

.insta:hover{
	color: #8C30AD;  
}

#root {
display:flex;
flex-direction: column;
width:100%;
height:100%;
font-family: 'Inter', sans-serif;
}

:root{

--primary-color: #2A1A31;
--secondary-color: #BECFE3;

--pure-white: #FFFF;
--pure-black: #000;
--sucess: #29801B;
--error: #FF0000;

--font-1:Bolder 32px;
--font-2:50px;
--font-3:27px;
--font-btn:Bold 32px;

}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	font-size: 16px;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Roboto', sans-serif;
	font: inherit;
	vertical-align: baseline;
	box-sizing:border-box;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    box-sizing: border-box;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
