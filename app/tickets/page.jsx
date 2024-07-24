import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default async function TicketDetails({ params }) {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets </h2>
          <p>
            <small>Currently open Tickets</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
