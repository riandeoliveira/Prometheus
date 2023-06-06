"use client";

import { Greetings } from "components/Greetings";
import type { NextPage } from "next";
import { ProtectedRoute } from "routes/ProtectedRoute";

const Home: NextPage = (): JSX.Element => {
  return (
    <ProtectedRoute>
      <div className="flex items-center flex-col gap-4 justify-center min-h-screen">
        <Greetings />
      </div>
    </ProtectedRoute>
  );
};

export default Home;
