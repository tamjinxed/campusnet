interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

export default function EventCard({ title, date, description }: EventCardProps) {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary ml-2">{date}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Details</button>
        </div>
      </div>
    </div>
  );
}
