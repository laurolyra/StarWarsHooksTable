import React, { useContext } from 'react';
import SWContext from '../context/starWarsContext';
import GenerateColumns from './GenerateColumns';
import GenerateComparison from './GenerateComparison';
import './Dropdowns.css';

const Dropdowns = () => {
  const {
    columnOptions,
    filters,
    setFilters,
    newNumericValues,
    setColumnOptions,
  } = useContext(SWContext);
  const createFilter = () => {
    setFilters(filters[0].numericValues.column === ''
      ? [newNumericValues]
      : filters.concat(newNumericValues));
    setColumnOptions(columnOptions
      .filter((item) => item !== newNumericValues.numericValues.column));
  };
  return (
    <div className="dropdowns-container">
      {columnOptions.length !== 0
        ? (
      [<GenerateColumns key='generate-columns' />,
        <GenerateComparison key='generate-comparison' />,
        <button
          key='dropdowns-button'
          type="button"
          onClick={() => createFilter()}
        >
          Filter!
        </button>,
      ])
        : <div>No more filters available!</div>}
    </div>
  );
};
export default Dropdowns;
