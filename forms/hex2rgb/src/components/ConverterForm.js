import { useState } from "react";

function ConverterForm(props) {
  const [form, setForm] = useState({
    hexColor: '',
  });
  const [rgbColor, setRgbColor] = useState({
    value: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(form.hexColor);

    setRgbColor(rgbColor => ({...rgbColor,
      value: result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
                    : "Ошибка!"
    }));

    if (rgbColor.length !== 7) {
      return; 
    }
  };

  const handleColorChanged = (event) => {
    setForm(prevForm => ({...prevForm, hexColor: event.target.value}));
  };
  
  return (
    <div className="converter" style={{backgroundColor: ((rgbColor.value === 'Ошибка!') ? 'crimson' : rgbColor.value)}}>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleColorChanged}></input>
        <div className="rgb">{rgbColor.value}</div>
      </form>
    </div>
  )
}

export default ConverterForm;
