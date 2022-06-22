import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import classes from "./Home.module.scss";
import CategoryBar from "./HomeComponents/CategoryBar/CategoryBar";
import ChatList from "./HomeComponents/ChatList/ChatList";
import searchIcon from "../../assets/Icons/search.png";
import { muiStyles } from "../../css/MuiStyles";

export type inputOnChangeType = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
const Home = () => {
  const muiStyle = muiStyles();
  const [searchChat, setSearchChat] = useState<string>("");

  const handleSearchChat = (e: inputOnChangeType) => {
    setSearchChat(e.target.value);
  };
  return (
    <div className={classes["profileIcon"]}>
      <div className={classes["profileHeader"]}>
        <Header />
        <CategoryBar />
        <div className={classes["divider"]} />
        <ChatList />
      </div>

      <div className={classes["searchInputWrapper"]}>
        <Input
          value={searchChat}
          onChange={handleSearchChat}
          leftIcon={searchIcon}
          muiClass={muiStyle.searchInput}
          placeholder={"Search"}
        />
      </div>
    </div>
  );
};

export default Home;
