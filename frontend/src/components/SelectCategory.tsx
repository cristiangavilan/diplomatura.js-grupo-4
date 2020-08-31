import React from 'react';
import { ICategory } from 'memegram-commons/models/Category.model';

export const SelectCategory = ({ name }: ICategory) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
