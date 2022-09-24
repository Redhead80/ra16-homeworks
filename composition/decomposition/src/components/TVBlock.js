// Телепрограмма

import TVItem from "./TVItem";

function TVBlock(props) {
  const {tvItems} = props;

  return (
    <div>
      <div>Телепрограмма</div>
      <ul className="tvs">
        {
          tvItems.map((tvItem, index) => {
            return (<li key={index}>
              <TVItem tvItem={tvItem}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default TVBlock;