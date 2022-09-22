function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className="toolbar">
      {filters.map((filter) => {
        return (
          <button 
            className={selected === filter ? "filter-selected" : ""}
            key={filter}
            onClick={onSelectFilter}>
              {filter}
          </button>
        );
      })}
    </div>
  );
}

export default Toolbar;
