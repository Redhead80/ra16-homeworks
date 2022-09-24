// Элемент в категории "Эфир"

function BroadcastItem(props) {
  return (
    <div className="broadcast">
      <img className="broadcast-image" src="https://www.pngkit.com/png/detail/0-4191_circled-play-icon-message-icon-png.png" alt=""></img>
      <div className="space">{props.broadcastItem.text}</div>
      <div>{props.broadcastItem.source}</div>
    </div>
  );
}

export default BroadcastItem;