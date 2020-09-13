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

export const MemeGrid = ({ category }: { category?: ICategoryBase }) => {
  const [memes, setMemes] = useState<IMemeListItem[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [totalMemes, setTotalMemes] = useState<number>(INITIAL_TOTAL);

  const moreMemes = async () => {
    setSkip(skip + INITIAL_LIMIT);

    if (!isRequesting) {
      setIsRequesting(true);
      try {
        const m = await MemeSdk.getMemes(skip, INITIAL_LIMIT, category?._id);
        setTotalMemes(m.total);
        setMemes([...memes, ...m.memes]);
      } catch (err) {
        console.error(err);
        setTotalMemes(0);
      } finally {
        setIsRequesting(false);
      }
    }
  };

  useEffect(() => {
    setMemes([]);
    setSkip(INITIAL_SKIP);
    setTotalMemes(INITIAL_TOTAL);
    moreMemes();
    // @ts-ignore WARN! Not include moreMemes
  }, [category]);

  if (memes.length > 0) {
    return (
      <div>
        <div className="card-columns">
          <InfiniteScroll
            dataLength={memes.length}
            next={moreMemes}
            hasMore={totalMemes > skip}
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
