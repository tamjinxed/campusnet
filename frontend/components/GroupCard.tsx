interface GroupCardProps {
  name: string;
  description: string;
}

export default function GroupCard({ name, description }: GroupCardProps) {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Visit</button>
        </div>
      </div>
    </div>
  );
}
