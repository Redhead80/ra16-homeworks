// Элемент в категории "Телепрограмма"

function TVItem(props) {
  return (
    <div className="tv-item">
      <div className="space">{props.tvItem.time}</div>
      <div className="space">{props.tvItem.name}</div>
      <div className="space">{props.tvItem.channel}</div>
    </div>
  );
}

export default TVItem;