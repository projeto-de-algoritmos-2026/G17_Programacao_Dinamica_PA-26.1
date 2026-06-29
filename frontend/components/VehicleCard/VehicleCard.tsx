import Button from "../Button";

interface VehicleCardProps {
  name: string;
  model: string;
  capacity: string;
  image?: string;
  onSelect: () => void;
}

export function VehicleCard({ name, model, capacity, image, onSelect }: VehicleCardProps) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-card__header">
        <h4>{name}</h4>
      </div>

      <div className="vehicle-card__body">
        <div className="vehicle-card__field">
          <span className="vehicle-card__label">Modelo</span>
          <span className="vehicle-card__value">{model}</span>
        </div>
        <div className="vehicle-card__field">
          <span className="vehicle-card__label">Capacidade</span>
          <span className="vehicle-card__value">{capacity}</span>
        </div>

        {image && (
          <img
            className="vehicle-card__img"
            src={image}
            alt={name}
          />
        )}
      </div>

      <div className="vehicle-card__footer">
        <Button variant="primary" onClick={onSelect}>
          Escolher este
        </Button>
      </div>
    </div>
  );
}