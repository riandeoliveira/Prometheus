import { NextResponse } from "next/server";

type Data = {
  title: string;
  message: string;
  info: string;
}

export const GET = async (): Promise<NextResponse<Data>> => {
  return NextResponse.json({
    title: "Hello, <AUTHOR>!", 
    message: "You chose the awesome stack: React + NextJS + SASS Modules + Zustand + Firebase", 
    info: "Have a nice coding!"
  });
}
