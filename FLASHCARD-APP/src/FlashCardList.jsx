import React from "react";
import FlashCard from "./FlashCard";

export default function FlashCardList({ flashCards }) {
  return (
    <div className="grid items-center columnTemplate gap-4">
      {flashCards.map((flashCard) => {
        return <FlashCard key={flashCard.id} data={flashCard}></FlashCard>;
      })}
    </div>
  );
}
