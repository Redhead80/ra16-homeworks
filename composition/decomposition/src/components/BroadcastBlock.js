// Эфир

import BroadcastItem from "./BroadcastItem";

function BroadcastBlock(props) {
  const {broadcastItems} = props;

  return (
    <div>
      <div>Эфир</div>
      <ul className="visitings">
        {
          broadcastItems.map((broadcastItem, index) => {
            return (<li key={index}>
              <BroadcastItem broadcastItem={broadcastItem}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default BroadcastBlock;