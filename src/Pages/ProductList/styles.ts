import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 150px auto 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0F52BA;
  height: 101px;
  width: 100%;
`;

export const Cart = styled.div`
  display: flex;
  margin-right: 50px;
  background-color: #FFFFFF;
  width: 90px;
  height: 45px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;

  .Cart {
    width: 19.01px;
    height: 20px;
    margin-right: 20px;
  }
`;

export const MKS = styled.div`
  margin-left: 50px;
  .MKS {
    color: #FFFFFF;
    margin-right: 10px;
    font-weight: 600;
    font-size: 40px;
  }
  .Sistems {
    color: #FFFFFF;
    font-weight: 300;
    font-size: 20px;
  }
`;

export const HeaderDrawer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 20px 20px;

  .BuyCart {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 27px;
    width: 180px;
  }
`;

export const FooterDrawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #0F52BA;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 25px;

`;

export const SendShop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 700;
  height: 97px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #363636;
  }
  &:active {
    background-color: #808080;
  }
`;

export const CloseDrawer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background-color: #000000;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  margin-right: 10px;
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #FFFFFF;
  width: 379px;
  height: 95px;
  border-radius: 6px;
  margin: 0 auto 20px;
  
  img {
    width: 48px;
    height: 57px;
    margin-left: 10px;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #2C2C2C;
    font-size: 13px;
    font-weight: 400;
    width: 98px;
    margin-left: 15px;
  }

  .Price {
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    margin-left: 10px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  border: 2px solid #BFBFBF;
  border-radius: 4px;
  margin-left: 15px;
  width: 60px;
  padding: 2px;

  button {
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    font-size: 10px;
    width: 5px;
  }
  span {
    color: #000000;
    margin: 0 10px;
    font-size: 15px;
    font-weight: 400;
  }
`;

export const Division = styled.div`
  height: 11.5px;
  width: 1px;
  background-color: #BFBFBF;
`;


export const ExcludeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background-color: #000000;
  height: 18px;
  width: 18px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 100%;
  cursor: pointer;
  margin-bottom: 90px;
`