import React from 'react';
import { MemeCard } from './MemeCard';
import { memes } from '../data/data';

export const MemeGrid = ({ category }: { category: string }) => {
  if (category !== 'all') {
    const memesCategory = memes.filter((m) => m.category.name === category);
    if (memesCategory.length > 0) {
      return (
        <div className="card-columns">
          {memesCategory.map((meme, index) => {
            return <MemeCard key={index} {...meme} />;
          })}
        </div>
      );
    } else {
      return <p>No hay memes de la categoría: {category}</p>;
    }
  } else {
    return (
      <div className="card-columns">
        {memes.map((meme, index) => {
          return <MemeCard key={index} {...meme} />;
        })}
      </div>
    );
  }
};
