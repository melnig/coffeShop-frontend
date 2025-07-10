import React from "react";
import AccountIcon from "../AccountIcon";
import CartIcon from "../CartIcon";
import styles from "./Search.module.scss";

function Search() {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    setValue("");
    inputRef.current.focus();
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          value={value}
          name="search"
          className={styles.input}
          placeholder="Search"
          onChange={onChangeInput}
        />
        {!value ? (
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        ) : (
          <svg
            className={styles.clearIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            onClick={onClickClear}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      <AccountIcon />
      <CartIcon />
    </div>
  );
}

export default Search;
