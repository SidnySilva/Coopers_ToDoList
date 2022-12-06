import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	
	:root{

		/*Colors*/
		--light-green:#4AC959;
		--medium-green:#49AF55;
		--todo-orange:#E38D3F;
		--todo-text:#E88D39;
		--delete:#999999;
		--input-grey:#959595;
		--check-grey: #A1A1A1;
		--carousel-grey:#C4C4C4;
		--good-function:#9499B3;
		--good-text:#312F4F ;
		--getIn-grenn:#46BD62;
		--getIn-text:#06152B;
		--black:#000000;
		--white:#ffffff;

		/*fonts*/
		--montserrat: 'Montserrat', sans-serif;
		--poppins : 'Poppins', sans-serif;
	}
	/* Reset CSS*/
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
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline; 
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
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

export default GlobalStyle;
