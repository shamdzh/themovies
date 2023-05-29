import React, { useMemo, useState } from "react";
import { StyledInput } from "./styles";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const history = useHistory();

  const [query, setQuery] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      history.push({
        pathname: "search",
        search: "?" + queryString.stringify({ query: query }),
      });
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <StyledInput
      placeholder="Поиск по названию"
      onKeyUp={handleKeyDown}
      onChange={onChangeHandler}
      value={query}
    />
  );
};
