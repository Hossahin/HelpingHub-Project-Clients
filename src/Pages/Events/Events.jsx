import React from "react";
import UpcomingEventsList from "../../components/UpcomingEventsList";
import EventLocationsMap from "../../components/EventLocationsMap";

const Events = () => {
  return (
    <div>
      <UpcomingEventsList />
      <EventLocationsMap />
    </div>
  );
};

export default Events;
