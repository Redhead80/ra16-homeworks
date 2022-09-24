// Элемент в категории "Посещаемое"

function VisitingItem(props) {
  return (
    <div className="visit">
      <div className="visit-source">{props.visitingItem.source}</div>
      <div> - {props.visitingItem.text}</div>
    </div>
  );
}

export default VisitingItem;