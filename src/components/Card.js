export default function Card({ data, nextStep }) {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}
