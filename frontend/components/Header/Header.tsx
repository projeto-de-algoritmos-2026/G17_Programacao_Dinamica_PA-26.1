import Button from "../Button";
import Tab from "../Tab";
import DSIcon from "../DSIcon";
import Badge from "../Badge";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Início", icon: "home" },
  { label: "Eletrônicos", icon: "watch" },
  { label: "Roupas", icon: "checkroom" },
  { label: "Móveis", icon: "chair" },
];

interface HeaderProps {
  activeTab?: string;
  onTabChange?: (label: string) => void;
  onOrganizePedidos?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Header({
  activeTab = "Início",
  onTabChange,
  onOrganizePedidos,
  cartCount = 0,
  onCartClick,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.6 21.6H14.4V24H9.6V21.6ZM9.6 2.4H14.4V0H9.6V2.4ZM9.6 9.6H14.4V12H9.6V9.6ZM14.4 19.2H19.2V21.6H14.4V19.2ZM14.4 4.8H19.2V2.4H14.4V4.8ZM14.4 7.2H19.2V9.6H14.4V7.2ZM19.2 16.8H24V19.2H19.2V16.8ZM19.2 7.2H24V4.8H19.2V7.2ZM4.8 19.2H9.6V21.6H4.8V19.2ZM4.8 4.8H9.6V2.4H4.8V4.8ZM4.8 7.2H9.6V9.6H4.8V7.2ZM0 16.8H4.8V19.2H0V16.8ZM0 7.2H4.8V4.8H0V7.2Z" fill="#7003F2"/>
        </svg>
        <h1>OptiPack</h1>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <Tab
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={item.label === activeTab}
            onClick={() => onTabChange?.(item.label)}
          />
        ))}
        <Button
          label="Organizar pedidos"
          icon="delivery_truck_speed"
          hierarchy="primary"
          onClick={onOrganizePedidos}
        />
      </nav>

        <div className={styles.cartButton} >
          <Button hierarchy="tertiary" icon="shopping_cart" onClick={onCartClick} />
          {cartCount > 0 && <div className="styles.TopRight"><Badge shape="status" /></div>}
        </div>
    </header>
  );
}