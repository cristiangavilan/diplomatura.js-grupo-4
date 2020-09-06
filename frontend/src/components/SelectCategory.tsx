import React, { useState, useEffect, useCallback } from 'react';
import { TId } from 'memegram-commons/models/Base.model';
import { ICategory } from 'memegram-commons/models/Category.model';
import { CategorySdk } from '../sdk/CategorySdk';

export const SelectCategory = ({ onSelect }: { onSelect: (category: ICategory) => void }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoryId, setCategoryId] = useState<TId>('');

  const fetchCategories = useCallback(async () => {
    const data = await CategorySdk.getCategories();
    setCategories(data);
  }, []);

  useEffect(() => {
    fetchCategories().then();
  }, [fetchCategories]);

  useEffect(() => {
    if (categoryId && categories.length) {
      const selectedCategory = categories.find((c) => c._id === categoryId);

      if (selectedCategory) {
        onSelect(selectedCategory);
      }
    }
  }, [categoryId, onSelect, categories]);

  return (
    <div>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <label className="input-group-text bg-pink">Categoría:</label>
        </div>
        <select
          className="custom-select"
          aria-label="Selector de Categoria"
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
          value={categoryId}
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
