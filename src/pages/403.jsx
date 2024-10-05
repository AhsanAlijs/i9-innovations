import React from "react";
import Header from "../components/Header";

const ForbiddenPage = () => {
  return (
    <>
      <Header title={"403"} paragraph={"You don't have permission to access this page."} />
    </>
  );
};

export default ForbiddenPage;
