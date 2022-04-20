import React, { FC, useEffect, useState } from 'react';
import styles from './Cards.module.scss';
import { ICard } from 'interfaces/card';
import Card from 'components/shared/cards/card/Card';
import Button from 'components/shared/button/Button';
import ReactPaginate from 'react-paginate';

interface ICards {
  cards: ICard[];
  button: {
    text: string;
    onClick: () => void;
  } | null;
  pagination?: boolean;
}

export const Cards: FC<ICards> = ({ cards, button, pagination = false }) => {
  const itemsPerPage = 9;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(cards);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cards.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return (
    <>
      <div className={styles.cardsWrapper}>
        {currentItems.map((card: ICard, i: number) => (
          <Card
            key={i}
            type={card.type}
            description={card.description}
            imageUrl={card.imageUrl}
            rating={card.rating}
            title={card.title}
            link={card.link}
          />
        ))}
      </div>
      {button && <Button text={button.text} onClick={button.onClick} />}
      {pagination && (
        <ReactPaginate
          nextLabel=""
          className="pagination"
          pageClassName="page"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel=""
        />
      )}
    </>
  );
};

export default Cards;
