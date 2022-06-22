import React, { useState } from "react";

import classes from "./CategoryBar.module.scss";
import editIcon from "../../../../assets/Icons/edit.png";
import { useHistory } from "react-router-dom";
import { CREATE_EVENT_ROUTE } from "../../../../routes/RoutesConstants";
import { ECategoryType } from "../../../../enums/Enums";
import { OTHER_CATEGORIES } from "../../../../constants";
import Modal from "../../../../components/Modal/Modal";

const CategoryBar = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState<string>(ECategoryType.FEED);
  const [showCategories, setShowCategories] = useState(false);
  const handleCreateEvent = () => {
    history.push(CREATE_EVENT_ROUTE);
  };
  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };
  const handleCloseModal = () => {
    setShowCategories(false);
  };
  return (
    <div className={classes["categoryBarContainer"]}>
      <div
        className={classes["createIconContainer"]}
        onClick={handleCreateEvent}
      >
        <img alt="icon" src={editIcon} className={classes["createIcon"]} />
      </div>
      {MAIN_CATEGORIES.map((category, index) => {
        return (
          <div
            key={index}
            className={`${classes[classByType(index)]} ${
              isTabActive(activeTab, category) && classes["activeTab"]
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </div>
        );
      })}

      <div className={classes["moreButton"]}>
        <div
          className={classes["moreDots"]}
          onClick={() => {
            setShowCategories(true);
          }}
        >
          ...
        </div>
        {showCategories && (
          <CategoriesList
            closeModal={handleCloseModal}
            onCategoryClick={(categoryName) => {
              handleTabClick(categoryName);
              handleCloseModal();
            }}
            activeTab={activeTab}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryBar;

interface ICategoryList {
  closeModal: () => void;
  onCategoryClick: (name: string) => void;
  activeTab: string;
}

const CategoriesList: React.FC<ICategoryList> = ({
  closeModal,
  onCategoryClick,
  activeTab,
}) => {
  return (
    <Modal onClick={closeModal}>
      <div className={classes["singleCategoryWrapper"]}>
        {OTHER_CATEGORIES.map((category, index) => {
          return (
            <div
              key={index}
              className={`${classes["singleCategory"]} ${
                isTabActive(activeTab, category) && classes["activeTab"]
              }`}
              onClick={() => onCategoryClick(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

const MAIN_CATEGORIES = ["FEED", "LIVE", "AFFINITY"];
const classByType = (index: number) => {
  switch (index) {
    case 0:
      return "feedLabel";
    case 1:
      return "liveLabel";
    case 2:
      return "label";

    default:
      return "";
  }
};

const isTabActive = (activeTab: string, tabName: string) => {
  if (activeTab === tabName) return true;
  return false;
};
