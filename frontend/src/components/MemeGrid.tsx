import React, { useState, useEffect } from 'react';
import { MemeCard } from './MemeCard';
import { IMemeListItem } from 'memegram-commons/models/Meme.model';
import { MemeSdk } from '../sdk/MemeSdk';
import { TCategoryListItem } from 'memegram-commons/models/Category.model';
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from '../assets/images/loading.gif';

const INITIAL_SKIP = 0;
const INITIAL_LIMIT = 2;

export const MemeGrid = ({ category }: { category?: TCategoryListItem }) => {
  const [memes, setMemes] = useState<IMemeListItem[]>([]);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    setMemes([]);
    setSkip(INITIAL_SKIP);
  }, [category]);

  useEffect(() => {
    MemeSdk.getMemes(skip, INITIAL_LIMIT, category?._id).then((m) => {
      setMemes([...memes, ...m]);
    });
  }, [skip]);

  const moreMemes = () => {
    setSkip(skip + INITIAL_LIMIT);
  };

  if (memes.length > 0) {
    return (
      <div>
        <div className="card-columns">
          <InfiniteScroll
            dataLength={memes.length}
            next={moreMemes}
            hasMore={true}
            loader={<img className="center" src={loading} alt="user" width="60" />}
          >
            {memes.map((meme, index) => {
              return <MemeCard key={index} {...meme} />;
            })}
          </InfiniteScroll>
        </div>
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
