// Посещаемое

import VisitingItem from "./VisitingItem";

function VisitingBlock(props) {
  const {visitingItems} = props;

  return (
    <div>
      <div>Посещаемое</div>
      <ul className="visitings">
        {
          visitingItems.map((visitingItem, index) => {
            return (<li key={index}>
              <VisitingItem visitingItem={visitingItem}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default VisitingBlock;