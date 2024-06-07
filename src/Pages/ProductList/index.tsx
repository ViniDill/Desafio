import React, { useState, useEffect } from "react";
import {
  Container,
  Cards,
  Header,
  Cart,
  MKS,
  HeaderDrawer,
  CloseDrawer,
  DrawerContent,
  CartItem,
  CartItemDetails,
  QuantityControl,
  Total,
  SendShop,
  FooterDrawer,
  Division,
  ExcludeItem,
} from "./styles";
import Card from "../../Components/Card";
import { apiProductService } from "../../Services/ProductService/ProductService";
import { ProductProps } from "../../Services/ProductService/IProductService";
import Drawer from "@mui/material/Drawer";
import { useQuery } from "react-query";
import SkeletonProductList from "./Skeleton";

interface CartItem {
  product: ProductProps;
  quantity: number;
}

const ProductList: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const {
    data: productsData,
    isLoading,
    isError,
  } = useQuery<ProductProps[], Error>("products", () =>
    apiProductService
      .getProducts(1, 10, "name", "ASC")
      .then((response) => response.products)
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleRemoveItem = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const handleAddToCart = (product: ProductProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (productId: number, amount: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <Container>
      <Header>
        <MKS>
          <span className="MKS">MKS</span>
          <span className="Sistems">Sistemas</span>
        </MKS>
        <Cart onClick={() => setDrawerOpen(true)}>
          <img src="/Icons/Cart.svg" alt="" className="Cart" /> {cart.length}
        </Cart>
      </Header>
      {loading || isLoading ? (
        <SkeletonProductList />
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <Cards>
          {productsData &&
            productsData.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                description={product.description}
                onClick={() => handleAddToCart(product)}
                photo={product.photo}
              />
            ))}
        </Cards>
      )}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0F52BA",
            width: 486,
          },
        }}
      >
        <DrawerContent>
          <HeaderDrawer>
            <span className="BuyCart">Carrinho de Compras</span>
            <CloseDrawer onClick={() => setDrawerOpen(false)}>X</CloseDrawer>
          </HeaderDrawer>
          {cart.map((item) => (
            <CartItem key={item.product.id}>
              <img src={item.product.photo} alt={item.product.name} />
              <CartItemDetails>
                <span>{item.product.name}</span>
              </CartItemDetails>
              <QuantityControl>
                <button
                  onClick={() => handleQuantityChange(item.product.id, -1)}
                >
                  -
                </button>
                <Division />
                <span>{item.quantity}</span>
                <Division />
                <button
                  onClick={() => handleQuantityChange(item.product.id, 1)}
                >
                  +
                </button>
              </QuantityControl>
              <CartItemDetails>
                <span className="Price">
                  R$ {item.product.price * item.quantity}
                </span>
              </CartItemDetails>
              <ExcludeItem onClick={() => handleRemoveItem(item.product.id)}>
                X
              </ExcludeItem>
            </CartItem>
          ))}
          <FooterDrawer>
            <Total>
              <span>Total:</span>
              <span>R${calculateTotal().toFixed(2)}</span>
            </Total>
            <SendShop>Finalizar Compra</SendShop>
          </FooterDrawer>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default ProductList;
