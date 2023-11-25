import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }

    console.log(willUpdate);
  };
  console.log(value);
  return { value, onChange };
};

export default useInput;
