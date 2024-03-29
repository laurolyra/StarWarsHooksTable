import React, { useContext } from 'react';
import SWContext from '../context/starWarsContext';

const GenerateColumns = () => {
  const {
    changeNewNumericValues,
    columnOptions,
    formatString,
  } = useContext(SWContext);

  return (
    <div>
      <select
        data-testid="columnSelector"
        onChange={(e) => changeNewNumericValues('column', e)}
      >
        <option value="" hidden>Select Column</option>
        {columnOptions
          .map((option) => <option key={option} name="column" value={option}>{formatString(option)}</option>)}
      </select>
    </div>
  );
};
export default GenerateColumns;
