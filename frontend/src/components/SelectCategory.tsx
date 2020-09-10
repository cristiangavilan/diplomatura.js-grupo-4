import React, { useState, useEffect, useCallback } from 'react';
import { TCategoryListItem } from 'memegram-commons/models/Category.model';
import { ObjectId } from 'bson';
import { CategorySdk } from '../sdk/CategorySdk';

export const SelectCategory = ({
  onSelect,
  withAllCategory,
}: {
  onSelect: (category: TCategoryListItem | undefined) => void;
  withAllCategory?: Boolean;
}) => {
  const [categories, setCategories] = useState<TCategoryListItem[]>([]);
  const [categoryId, setCategoryId] = useState<String | undefined>();

  const fetchCategories = useCallback(async () => {
    const data: TCategoryListItem[] = await CategorySdk.getCategories();
    debugger;
    setCategories(data);
  }, []);

  useEffect(() => {
    fetchCategories().then();
  }, [fetchCategories]);

  useEffect(() => {
    console.debug('selectCategory called');
    if (categories.length) {
      if (categoryId) {
        const selectedCategory = categories.find((c) => {
          if (c._id) {
            return c._id === categoryId;
          } else {
            return false;
          }
        });
        console.debug('selectCategory', categoryId, selectedCategory);
        onSelect(selectedCategory);
      } else {
        console.debug('selectCategory none');
        onSelect(undefined);
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
          {withAllCategory && (
            <option key={-1} value={''}>
              Todos
            </option>
          )}
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
