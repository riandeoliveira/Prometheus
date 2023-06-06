import { NextResponse } from "next/server";

type Data = {
  title: string;
  message: string;
  info: string;
};

export const GET = (): NextResponse<Data> => {
  return NextResponse.json({
    title: "Hello, <AUTHOR>!",
    message:
      "You chose the awesome stack: React + NextJS + CSS Modules + Zustand + Firebase",
    info: "Have a nice coding!",
  });
};
