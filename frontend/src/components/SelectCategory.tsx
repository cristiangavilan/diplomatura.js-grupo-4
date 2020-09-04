import React from 'react';
import { categories } from '../data/data';

export const SelectCategory = ({ onSelect }: { onSelect: (categoryId: any) => void }) => {
  return (
    <div>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <label className="input-group-text bg-pink">Categoría:</label>
        </div>
        <select
          className="custom-select"
          aria-label="Selector de Categoria"
          onChange={(e) => onSelect(e.target.value || null)}
        >
          <option key={-1} value={''}>
            Todos
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
