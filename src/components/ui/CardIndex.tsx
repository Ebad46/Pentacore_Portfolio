type CardIndexProps = {
  index: number;
};

export default function CardIndex({ index }: CardIndexProps) {
  return (
    <div className="card-index" aria-hidden="true">
      <span className="card-index-line" />
      <span className="card-index-circle">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
