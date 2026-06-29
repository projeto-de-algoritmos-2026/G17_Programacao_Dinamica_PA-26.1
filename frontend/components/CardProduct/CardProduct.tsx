import Badge from "../Badge";
import Button from "../Button";
import styles from "./ProductCard.module.css";

interface Product {
  id: string | number;
  name: string;
  price: number;
  category?: string;
  imageUrl: string;
  imageAlt?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.category && (
          <div className={styles.categoryBadge}>
            <Badge label={product.category} />
          </div>
        )}
        <img
          src={product.imageUrl}
          alt={product.imageAlt ?? product.name}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.text}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{currencyFormatter.format(product.price)}</p>
        </div>

        <Button
          shape="circle"
          icon="shopping_cart"
          hierarchy="primary"
          onClick={() => onAddToCart?.(product)}
        />
      </div>
    </article>
  );
}