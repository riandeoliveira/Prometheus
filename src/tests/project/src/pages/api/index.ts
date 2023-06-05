import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
): void {
  return response.status(200).json({
    title: "Hello, <AUTHOR>!",
    message:
      "You chose the awesome stack: React + NextJS + Styled Components + Zustand + Firebase",
    info: "Have a nice coding!",
  });
}
