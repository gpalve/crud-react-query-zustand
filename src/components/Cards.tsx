interface Props {
  heading?: string;
  desc: string;
}

const Cards = ({ heading, desc }: Props) => {
  return (
    <div className="card">
      <div className="card-header">{heading}</div>
      <div className="card-body">
        <p>{desc}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Cards;
