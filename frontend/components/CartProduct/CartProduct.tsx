import Button from "../Button";

interface ProductCardProps {
    image?: string;
    name: string;
    weight: string;
    price: string;
    badge?: ReactNode; 
    onAddToCart: () => void;
}

export function CartProduct({ image, name, weight, price, onDelete }) {
  return (
    <div className="cart-card">
      <div className="cart-thumb">
        {image
          ? <img src={image} alt={name} />
          : <span className="material-icons">inventory_2</span>
        }
      </div>

      <div className="cart-info">
        <div className="cart-field">
          <span className="cart-label">Produto</span>
          <span className="cart-value">{name}</span>
        </div>
        <div className="cart-field">
          <span className="cart-label">Peso</span>
          <span className="cart-value">{weight}</span>
        </div>
        <div className="cart-field">
          <span className="cart-label">Preço</span>
          <span className="cart-value price">{price}</span>
        </div>
      </div>

      <button
        className="cart-delete"
        onClick={onDelete}
        aria-label="Remover item do carrinho"
      >
        <span className="material-icons">delete</span>
      </button>
    </div>
  );
}