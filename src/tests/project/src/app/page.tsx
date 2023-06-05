"use client";

import { Greetings } from "components/Greetings";
import type { NextPage } from "next";
import { ProtectedRoute } from "routes/ProtectedRoute";
import * as S from "../app/styles";

const Home: NextPage = (): JSX.Element => {
  return (
    <ProtectedRoute>
      <S.Box>
        <Greetings />
      </S.Box>
    </ProtectedRoute>
  );
};

export default Home;
