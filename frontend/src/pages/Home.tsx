import React, { useState } from 'react';
import { MemeGrid } from '../components/MemeGrid';
import { SelectCategory } from '../components/SelectCategory';

export const Home = () => {
  const [categoryId, setCategoryId] = useState<any>(null);
  return (
    <div className="m-4">
      <div className="container p-2">
        <SelectCategory onSelect={(categoryId) => setCategoryId(categoryId)} />
        <MemeGrid categoryId={categoryId} />
      </div>
    </div>
  );
};
