import React, { useState, useEffect } from 'react';
import { MemeCard } from './MemeCard';
import { IMemeListItem } from 'memegram-commons/models/Meme.model';
import { MemeSdk } from '../sdk/MemeSdk';
import { ICategory } from 'memegram-commons/models/Category.model';

export const MemeGrid = ({ category }: { category?: ICategory }) => {
  const [memes, setMemes] = useState<IMemeListItem[]>([]);

  useEffect(() => {
    MemeSdk.getMemes(category?._id).then((m) => setMemes(m));
  }, [category]);

  if (memes.length > 0) {
    return (
      <div className="card-columns">
        {memes.map((meme, index) => {
          console.log(meme);
          return <MemeCard key={index} {...meme} />;
        })}
      </div>
    );
  } else {
    return (
      <span>
        No hay memes de la categoría:
        {category?.name}
      </span>
    );
  }
};
