import styled from 'styled-components';
import { PRIMARY_COLOR } from '../variables';

const flex = 'display: flex;'
const flexCol = `${flex} flex-direction: column;`

export const HeaderContainer = styled.div<{isMenuOpened: boolean}>`
${flexCol}

${({isMenuOpened}) => isMenuOpened 
    ?"width: 200px;"
    :"width: 50px;"
}
height: 65%;
margin: 95px 0;
padding: 20px 20px;

border-radius: 0 10px 10px 0;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
background-color: #ffffff;

transition: width 0.5s ease;

&:hover{
    cursor: pointer;
}
`
export const LogoContainer = styled.div`
`
export const Logo = styled.img`
width: 40px;
`
export const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;

font-size: 20px;
font-weight: bold;
color: ${PRIMARY_COLOR};

transition: color 0.5s ease;
`

export const Text = styled.p`
padding: 0;
margin: 0;

animation: fadeIn 0.6s; 
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`