import React, { useState } from 'react';
import { MemeGrid } from '../components/MemeGrid';
import { SelectCategory } from '../components/SelectCategory';
import { ICategoryBase } from 'memegram-commons/models/Category.model';

export const Home = () => {
  const [category, setCategory] = useState<ICategoryBase>();

  return (
    <div className="m-4">
      <div className="container p-2">
        <SelectCategory onSelect={(category) => setCategory(category)} withAllCategory={true} />
        <MemeGrid category={category} />
      </div>
    </div>
  );
};
