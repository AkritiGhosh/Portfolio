import React, { useState } from "react";

const Experience = () => {
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="relative w-full h-full  p-4  snap-start snap-always text-navy flex md:flex-row flex-col gap-5">
      <div className="relative w-full h-full rounded-xl bg-white px-4 pb-6 text-xl leading-loose flex flex-col justify-center">
        <p className="font-bold">
          import <span className="text-teal">work_history</span>;
        </p>

        <p className="font-medium">
          var <span className="text-brown">length_experience</span> = 4
        </p>
        <p className="font-medium">
          var <span className="text-brown">cards</span> = Card[]
        </p>

        <p className="font-bold">
          for (<span className="text-coral">experience</span> in{" "}
          <span className="text-teal">work_history</span>):
        </p>
        <p className="font-medium px-5">insert_card()</p>
        <p className="font-medium px-5">
          <span className="text-brown">cards</span>.displayTitle(
          <span className="text-coral">experience</span>
          .company_name)
        </p>
        <p className="font-medium px-5">
          <span className="text-brown">cards</span>.displaySubtitle(
          <span className="text-coral">experience</span>
          .position)
        </p>
        <p className="font-medium px-5">
          <span className="text-brown">cards</span>.displayDates(
          <span className="text-coral">experience</span>
          .start_date , <span className="text-coral">experience</span>.end_date)
        </p>
        <p className="font-medium px-5">
          <span className="text-brown">cards</span>.describe(
          <span className="text-coral">experience</span>)
        </p>
        <p className="font-medium px-5">close_card()</p>

        <p className="font-medium">
          <span className="text-brown">cards</span>.show_cards()
        </p>
        <div className="absolute w-full bg-transparent bottom-4 z-10 right-4">
          <button
            onClick={() => setShowCards(true)}
            disabled={showCards}
            className="bg-navy text-white rounded-lg h-10 font-medium px-4 hover:bg-teal float-right disabled:opacity-20 disabled:pointer-events-none"
          >
            Run code{" "}
          </button>
        </div>
      </div>
      {showCards && (
        <div className="relative w-full h-full rounded-xl bg-white px-4 pb-6"></div>
      )}
    </div>
  );
};

export default Experience;
