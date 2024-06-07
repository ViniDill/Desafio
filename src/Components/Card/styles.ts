import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFFF;
    width: 217.56px;
    height: 285px;
    border-radius: 7px;
    box-shadow: 0 5px 5px 2px #B3B3B3;
    
`;

export const Buy = styled.div` 
    display: flex;
    background-color: #0F52BA;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    height: 31.91px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 0 0 7px 7px;
    cursor: pointer;
    ;

    .Buy {
        margin-left: 10px;
    }
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;

    img{
        height: 100px;
    }
`

export const NameAndPrice = styled.div`
    display: flex;
    align-items: center;
`

export const Name = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 400;
    color: #2C2C2C;
    margin: 0 11.5px;
    width: 124px;
`

export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 28px;
    background-color: #373737;
    font-size: 11px;
    font-weight: 700;
    border-radius: 5px;
    color: #FFFFFF;
    margin-right: 11.5px;
    padding: 0 5px;
`

export const Description = styled.div`
    font-size: 10px;
    font-weight: 300;
    color: #2C2C2C;
    margin: 4px 11.5px;
`