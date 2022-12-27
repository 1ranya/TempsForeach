import styled from 'styled-components';

const flex = 'display: flex;'
const flexCol = `${flex} flex-direction: column;`

export const HeaderContainer = styled.div`
    ${flexCol}
    
    min-width: 50px; 
    max-width: 500px;
    height: 65%;
    margin: 95px 0;

    border-radius: 0 10px 10px 0;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`