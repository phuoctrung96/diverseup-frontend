import React, { FC, useEffect, useState } from 'react';
import styles from './Cards.module.scss';
import { ICard } from 'interfaces/card';
import Card from 'components/shared/cards/card/Card';
import Button from 'components/shared/button/Button';
import ReactPaginate from 'react-paginate';
import { Pagination } from 'interfaces';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import Loader from 'components/common/loader/Loader';

interface ICards {
  cards: ICard[];
  isLoading: boolean;
  button: {
    text: string;
    onClick: () => void;
  } | null;
  pagination?: Pagination;
}

export const Cards: FC<ICards> = ({ cards, button, pagination, isLoading }) => {
  const itemsPerPage = 12;
  const [pageCount, setPageCount] = useState(pagination?.total || 0);
  const [itemOffset, setItemOffset] = useState(pagination?.page || 0);
  const [currentItems, setCurrentItems] = useState(cards);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentItems(cards);
    setPageCount(pagination?.total ? Math.ceil(pagination?.total / itemsPerPage) : 0);
  }, [cards, pagination]);

  const handlePageClick = (event: any) => {
    const page = event.selected + 1;
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (page !== pagination?.page) {
      setSearchParams({ ...params, page });
      navigate(
        {
          search: createSearchParams({ ...params, page }).toString(),
        },
        { replace: true }
      );
    }
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cards.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
              pageRangeDisplayed={0}
              marginPagesDisplayed={2}
              initialPage={pagination?.page - 1 || 0}
              pageCount={pageCount}
              previousLabel=""
            />
          )}
        </>
      )}
    </>
  );
};

export default Cards;
