import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from ".";

describe("Card Component", () => {
  const mockOnClick = jest.fn();

  const renderComponent = (props) =>
    render(
      <Card
        photo={props.photo}
        name={props.name}
        price={props.price}
        brand={props.brand}
        description={props.description}
        onClick={props.onClick}
      />
    );

  const defaultProps = {
    photo: "test-photo-url",
    name: "Test Name",
    price: 100,
    brand: "Test Brand",
    description: "Test Description",
    onClick: mockOnClick,
  };

  it("renders without crashing", () => {
    renderComponent(defaultProps);
  });

  it("displays the image correctly", () => {
    renderComponent(defaultProps);
    const imageElement = screen.getByAltText(
      `${defaultProps.brand} ${defaultProps.name}`
    );
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", defaultProps.photo);
  });

  it("displays the name and brand correctly", () => {
    renderComponent(defaultProps);
    const nameElement = screen.getByText(
      `${defaultProps.brand} ${defaultProps.name}`
    );
    expect(nameElement).toBeInTheDocument();
  });

  it("displays the price correctly", () => {
    renderComponent(defaultProps);
    const priceElement = screen.getByText(`R$${defaultProps.price}`);
    expect(priceElement).toBeInTheDocument();
  });

  it("displays the description correctly", () => {
    renderComponent(defaultProps);
    const descriptionElement = screen.getByText(defaultProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("calls onClick when the 'Buy' button is clicked", () => {
    renderComponent(defaultProps);
    const buyButton = screen.getByText("COMPRAR");
    fireEvent.click(buyButton);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("displays the 'Buy' button with the correct image", () => {
    renderComponent(defaultProps);
    const buyButtonImage = screen.getByAltText("imagem de compra");
    expect(buyButtonImage).toBeInTheDocument();
    expect(buyButtonImage).toHaveAttribute("src", "./Icons/shoppingbag.svg");
  });
});
