import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Board, Header } from "..";
import { selectors, thunks } from "../../redux/ducks";
import { AppDispatch } from "../../redux/store";
import { Card } from "../../UI";
import styles from "./Cards.module.css";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(30);
  const [totalCount, setTotalCount] = useState(30);

  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.proposal.SelectPoposal);
  const countServer = useSelector(selectors.proposal.SelectCount);
  console.log("countServer", countServer >= currentPage);

  let boool = countServer >= currentPage;

  const filter = useSelector(selectors.filterPages.SelectFilter);

  useEffect(() => {
    // if (filter.namePage !== "Новая") {
    dispatch(
      thunks.proposal.getProposalList({
        limit: 30,
        status: filter?.namePage !== undefined ? filter.namePage : "Новая",
      })
    );
    setCurrentPage(30);
    setTotalCount(countServer);
    // }
  }, [filter, countServer]);

  useEffect(() => {
    if (fetching) {
      console.log("fetching");

      // dispatch(thunks.proposal.getProposalList(currentPage));
      dispatch(
        thunks.proposal.getProposalList({
          limit: currentPage,
          status: filter?.namePage !== undefined ? filter.namePage : "Новая",
        })
      );
      setCurrentPage((prevState) => prevState + 20);
      setFetching(false);
      setTotalCount(countServer);
    }
  }, [fetching]);

  useEffect(() => {
    dispatch(thunks.tagsCard.getListProposalTags());
  }, []);
  useEffect(() => {
    setTotalCount(countServer);

    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (
    e: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement;
    } & any
  ) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
      console.log("scroll");
    } else if (totalCount > currentPage === false) {
    }
  };
  return (
    <>
      {cardServer?.map((item, key) => (
        <Card
          idTrub={item.truba_id}
          id={item.id}
          date={item.create_at}
          status={item.status}
          desctext={item.text}
          zametki={item.zametki}
          key={key}
        />
      ))}
    </>
  );
};

export default Cards;
