import styled from 'styled-components';

//AvengerCard
export const StyledAvengerCard = styled.article`
    width: 280px;
    height: 170px;
    margin: 5px 10px;
    border: 0px solid gray;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #4C0276;
`;

export const AvengerCardImage = styled.img`
    width: 100px;
    height: 100px;
    border: 3px solid #FFCA4F;
    border-radius: 50%;
`;

export const AvengerCardInteract = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AvengerCardName = styled.p`
    color: white;
`;

export const AvengerCardNameTitle = styled.span`
    font-weight: bold;
`;

export const AvengerCardButton = styled.button`
    font-weight: bold;
    font-size: 15px;
    color: white;
    background: tomato;
    margin: 5px 0;
    height: 40px;
    width: 120px;
    cursor: pointer;
    transition: .5s ease all;
    border-radius: 8px;
    border: none;
    outline:none;
    :hover {
        background-color: rgb(41, 98, 144);
    }
`;

export const AvengerCardButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;