import React from 'react';
import { MemeCard } from './MemeCard';
import { memes, categories } from '../data/data';

export const MemeGrid = ({ categoryId }: { categoryId: any }) => {
  if (categoryId) {
    const memesCategory = memes.filter((m) => m.category._id === categoryId);

    if (memesCategory.length > 0) {
      return (
        <div className="card-columns">
          {memesCategory.map((meme, index) => {
            return <MemeCard key={index} {...meme} />;
          })}
        </div>
      );
    } else {
      return <span>No hay memes de la categoría: {categories.find((c) => c._id === categoryId)?.name}</span>;
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
