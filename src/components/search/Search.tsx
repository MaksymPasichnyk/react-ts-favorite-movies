import styles from "./search.module.scss";
import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState, SyntheticEvent } from "react";
import useFetch from "../../hooks/useFetch";

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const {data, getData} = useFetch(inputValue);

  const searchStyles = {
    width: `${isSearchActive ? "auto" : "35px"}`,
  };

  const showSearch = () => {
    setIsSearchActive(true);
    console.log("click");
  };

  const hideSearch = () => {
		setIsSearchActive(false)
	};

	const handleSubmit = (event: SyntheticEvent) => {
		console.log('hey world')
		getData(inputValue)
		console.log(data);
	}

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <div
      className={`${styles.root}`}
      style={searchStyles}
      onClick={showSearch}
			onBlur={hideSearch}
    >
      <SearchOutlined className={styles.searchIcon} />
      <Form onSubmitCapture={handleSubmit}>
        <Input 
					onChange={handleChange}
					bordered={false} 
					value={inputValue}
					/>
      </Form>
    </div>
  );
};

export default Search;
