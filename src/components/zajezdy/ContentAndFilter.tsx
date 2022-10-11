import Wrapper from "@components/bricks/Wrapper";
import { useState } from "react";

import ContentCreator from "./ContentCreator";
import Filter from "./Filter";

export default function ContentAndFilter() {
  const [category, setCategory] = useState<string>("Vse");
  const [dateFrom, setDateFrom] = useState<string>(new Date().toISOString().slice(0, 10));
  const [dateTo, setDateTo] = useState<string>("2032-12-31");

  return (
    <Wrapper as={"section"} size="lg">
      <Filter
        category={category}
        setCategory={setCategory}
        dateFrom={dateFrom}
        setDateFrom={setDateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
      />
      <ContentCreator category={category} dateTo={dateTo} dateFrom={dateFrom} />
    </Wrapper>
  )
}