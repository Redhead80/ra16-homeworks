function IconSwitch(props) {
  const {icon, onSwitch} = props;

  return <div className='switch-button-wrapper'>
    <button className='switch-button' onClick={onSwitch}>
      <span className='material-icons'>{icon}</span>
    </button>
  </div>
}

export default IconSwitch;