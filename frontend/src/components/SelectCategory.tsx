import React from 'react';
import { categoriasTest } from '../data/data';

export const SelectCategory = ({ setCategory }: { setCategory: Function }) => {
  return (
    <div>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <label className="input-group-text bg-pink">Categoría:</label>
        </div>
        <select
          className="custom-select"
          aria-label="Selector de Categoria"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoriasTest.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
