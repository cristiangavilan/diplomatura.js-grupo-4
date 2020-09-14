import React, { useState, useEffect, useCallback } from 'react';
import { ICategoryBase } from 'memegram-commons/models/Category.model';
import { CategorySdk } from '../sdk/CategorySdk';

export const SelectCategory = ({
  onSelect,
  withAllCategory,
}: {
  onSelect: (category: ICategoryBase | undefined) => void;
  withAllCategory?: Boolean;
}) => {
  const [categories, setCategories] = useState<ICategoryBase[]>([]);
  const [categoryId, setCategoryId] = useState<string | undefined>();

  const fetchCategories = useCallback(async () => {
    const data: ICategoryBase[] = await CategorySdk.getCategories();
    setCategories(data);
  }, []);

  useEffect(() => {
    fetchCategories().then();
  }, [fetchCategories]);

  useEffect(() => {
    if (categories.length) {
      if (categoryId) {
        const selectedCategory = categories.find((c) => {
          if (c._id) {
            return c._id === categoryId;
          } else {
            return false;
          }
        });
        onSelect(selectedCategory);
      } else {
        onSelect(undefined);
      }
    }
  }, [categoryId, onSelect, categories]);

  return (
    <div>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <label className="input-group-text bg-pink">
            <i className="fas fa-search"></i> Categoría:
          </label>
        </div>
        <select
          className="custom-select"
          aria-label="Selector de Categoria"
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
          value={categoryId}
        >
          {withAllCategory && (
            <option key={-1} value={''}>
              Todos
            </option>
          )}
          {categories?.length &&
            categories.map((category, index) => (
              <option key={index} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
