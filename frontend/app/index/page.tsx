import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ProductCard } from "../../components/ProductCard";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import { default } from "../../components/DSIcon/";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

// mock — substituir por fetch real
const MOCK_PRODUCTS: Product[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: "Body Medium",
  price: "R$ 29,99",
  image: "",
  category: "Eletrônico",
}));

const PAGE_SIZE = 5;
const TOTAL_PAGES = 16;

export default function Home() {
  const [page, setPage] = useState(1);

  const products = MOCK_PRODUCTS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleAddToCart(product: Product) {
    console.log("adicionar ao carrinho", product);
  }

  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Faça aqui</p>
        <h1 className={styles.heroTitle}>Seu Próximo Pedido.</h1>
        <p className={styles.heroSub}>
          Navegue pelo catálogo, adicione produtos ao seu carrinho e organize os
          pedidos com facilidade.
        </p>
        <Button variant="primary">
          <DSIcon name="shopping_bag" />
          Comprar agora
        </Button>
      </section>

      {/* Catálogo */}
      <section className={styles.catalog}>
        <h2 className={styles.catalogTitle}>Catálogo</h2>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              badge={<Badge shape="default" label={product.category} color="success" />}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>

        <Pagination
          current={page}
          total={TOTAL_PAGES}
          onChange={setPage}
        />
      </section>

      <Footer />
    </div>
  );
}