import React, { useState, useEffect } from 'react';
import { MemeCard } from './MemeCard';
import { dbCategories } from '../data/data';
import { Meme } from 'memegram-commons/models/Meme.model';
import { MemeSdk } from '../sdk/MemeSdk';

export const MemeGrid = ({ categoryId }: { categoryId: any }) => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    MemeSdk.getMemes(categoryId).then((m) => setMemes(m));
  }, [categoryId]);

  if (memes.length > 0) {
    return (
      <div className="card-columns">
        {memes.map((meme, index) => {
          return <MemeCard key={index} {...meme} />;
        })}
      </div>
    );
  } else {
    return (
      <span>
        No hay memes de la categoría:
        {dbCategories.find((c) => c._id === categoryId)?.name}
      </span>
    );
  }
};
