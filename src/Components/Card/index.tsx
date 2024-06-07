import React from "react";
import {
  Container,
  Buy,
  NameAndPrice,
  Name as NameStyled,
  Price as PriceStyled,
  Image,
  Description as DescriptionStyled,
} from "./styles";

export interface CardProps {
  iconName?: string;
  name?: string;
  price?: number;
  brand?: string;
  description?: string;
  photo?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  photo,
  name,
  price,
  brand,
  description,
  onClick,
}) => {
  return (
    <Container>
      <Image>
        <img src={photo} alt={`${brand} ${name}`} />
      </Image>
      <NameAndPrice>
        <NameStyled>
          {brand} {name}
        </NameStyled>
        <PriceStyled>{`R$${price}`}</PriceStyled>
      </NameAndPrice>
      <DescriptionStyled>{description}</DescriptionStyled>
      <Buy onClick={onClick}>
        <img src="./Icons/shoppingbag.svg" alt="imagem de compra" />
        <span className="Buy">COMPRAR</span>
      </Buy>
    </Container>
  );
};

export default Card;
