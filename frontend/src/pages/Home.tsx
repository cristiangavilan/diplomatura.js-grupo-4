import React, { useState } from 'react';
import { useAppState } from '../state';
import { MemeGrid } from '../components/MemeGrid';
import { TabBar } from '../components/TabBar';
import { SelectCategory } from '../components/SelectCategory';

export const Home = () => {
  const state = useAppState();
  const [category, setCategory] = useState('all');
  return (
    <div className="m-4">
      <div className="container p-2">
        {/* {state.loggedIn && <h3>Welcome {state.user?.username}!</h3>} */}
        <SelectCategory onSelect={(category) => setCategory(category)} />
        <MemeGrid category={category} />
      </div>
    </div>
  );
};
