import React, { useState } from "react";

import styles from  "./SearchBar.module.scss";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchbarProps) => {
  const [tempQuery, setTempQuery] = useState("");

  const onInputChange = (event: any) => {
    const val = event.target.value;
    setTempQuery(val);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      onSearch && onSearch(tempQuery);
    }
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchbar__input}
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className={styles.submitBtn}
        onClick={() => onSearch && onSearch(tempQuery)}
      >
        Search
      </button>
    </div>
  );
}

export default React.memo(SearchBar);

