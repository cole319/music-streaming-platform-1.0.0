"use client";

import { DotLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box
      className="
        h-full
        flex
        items-center
        justify-center
    "
    >
      {/*color="#22c55e"*/}
      <DotLoader size={50} color="#06b6d4" />
    </Box>
  );
};

export default Loading;
