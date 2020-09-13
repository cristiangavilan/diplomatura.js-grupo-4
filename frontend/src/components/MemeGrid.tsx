import React, { useState, useEffect } from 'react';
import { MemeCard } from './MemeCard';
import { IMemeListItem } from 'memegram-commons/models/Meme.model';
import { MemeSdk } from '../sdk/MemeSdk';
import { ICategoryBase } from 'memegram-commons/models/Category.model';
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from '../assets/images/loading.gif';

const INITIAL_SKIP = 0;
const INITIAL_TOTAL = Number.POSITIVE_INFINITY;
const INITIAL_LIMIT = 2;

let seek = INITIAL_SKIP;
let working = false;

export const MemeGrid = ({ category }: { category?: ICategoryBase }) => {
  const [memes, setMemes] = useState<IMemeListItem[]>([]);
  const [totalMemes, setTotalMemes] = useState<number>(INITIAL_TOTAL);

  const getMemes = (skip: number, limit: number, categoryId: any) => {
    MemeSdk.getMemes(skip, limit, categoryId).then((m) => {
      setTotalMemes(m.total);
      setMemes([...m.memes]);
    });
  };

  const getMoreMemes = (skip: number, limit: number, categoryId: any) => {
    MemeSdk.getMemes(skip, limit, categoryId).then((m) => {
      setTotalMemes(m.total);
      setMemes([...memes, ...m.memes]);
    });
  };

  useEffect(() => {
    if (!working) {
      working = true;

      seek = INITIAL_SKIP;
      getMemes(seek, INITIAL_LIMIT, category?._id);

      working = false;
    }
  }, [category]);

  const moreMemes = () => {
    if (!working) {
      working = true;

      seek += INITIAL_LIMIT;
      getMoreMemes(seek, INITIAL_LIMIT, category?._id);

      working = false;
    }
  };

  if (memes.length > 0) {
    return (
      <div>
        <div className="card-columns">
          <InfiniteScroll
            dataLength={memes.length}
            next={moreMemes}
            hasMore={totalMemes > memes.length}
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
      <div className="row">
        <div className="col">
          <span>
            No hay memes de la categoría:
            {category?.name}
          </span>
        </div>
      </div>
    );
  }
};
