function Card(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
}

export default Card;