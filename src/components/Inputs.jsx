import { useState } from 'react';
import '../stylesheets/Inputs.css';
const Inputs = () => {
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState("");

  const handleYearOfBirth = (e) => {
    setYearOfBirth(e.target.value);
  }

  const handleLifeExpectancy = (e) => {
    setLifeExpectancy(e.target.value);
  }

  const clearPlaceholder = (e) => {
    e.target.placeholder = "";
  }


  const resetPlaceholder = (e) => {
    e.target.placeholder = e.target.name === 'yearOfBirth' ? 'Enter year of birth' : 'Enter life expectancy';
  }

  return (
    <div className="inputs">
      <input
        type="number"
        name="yearOfBirth"
        placeholder="Enter year of birth"
        value={yearOfBirth}
        onChange={handleYearOfBirth}
        onClick={clearPlaceholder}
        onBlur={resetPlaceholder}
      />
      <input
        type="number"
        name="lifeExpectancy"
        placeholder="Enter life expectancy"
        value={lifeExpectancy}
        onChange={handleLifeExpectancy}
        onClick={clearPlaceholder}
        onBlur={resetPlaceholder}
      />
      <button>Calculate</button>
    </div>
  );
}

export default Inputs;