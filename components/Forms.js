// Forms component

import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Tên:</label>
      <input type="text" id="name" name="name" />
      <input type="submit" value="Gửi" />
    </form>
  );
};

export default Form;
