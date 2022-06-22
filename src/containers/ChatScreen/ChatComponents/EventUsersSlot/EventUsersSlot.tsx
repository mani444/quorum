import React, { useState } from "react";

import classes from "./EventUsersSlot.module.scss";
import downArrow from "../../../../assets/Icons/down-arrow.png";
import Modal from "../../../../components/Modal/Modal";
import { Event_Users_List } from "../../../../constants";
import { RadioGroup } from "@mui/material";
import RadioWithText from "../../../../components/RadioButton/RadioButton";
import { E_RSVP_Type } from "../../../../enums/Enums";

const EventUsersSlot = () => {
  const [showMembers, setShowMembers] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState(E_RSVP_Type.YES);

  const handleRsvpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRsvpStatus(event.target.value);
    setShowRsvp(false);
  };
  const handleHideRsvp = () => {
    setShowRsvp(false);
  };
  const handleHideMembers = () => {
    setShowMembers(false);
  };
  return (
    <div className={classes["eventSlotContainer"]}>
      {showRsvp && (
        <RsvpStatusModal
          value={rsvpStatus}
          onClose={handleHideRsvp}
          handleChange={handleRsvpChange}
        />
      )}
      {showMembers && <MembersList onClick={handleHideMembers} />}
      <div
        className={classes["totalUsers"]}
        onClick={() => {
          setShowMembers(true);
        }}
      >
        QUORUM: 15
      </div>
      <div className={classes["detailsSection"]}>
        <div
          className={classes["chooseSection"]}
          onClick={() => {
            setShowRsvp(true);
          }}
        >
          <div className={classes["chooseTitle"]}>RSVP</div>
          <img src={downArrow} alt="icon" className={classes["chooseIcon"]} />
        </div>
        <div className={classes["comingUsers"]}>YES: 7</div>
        <div className={classes["notComingUsers"]}>NO: 6</div>
      </div>
    </div>
  );
};

export default EventUsersSlot;
interface IRsvpStatusModal {
  onClose: () => void;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const RsvpStatusModal: React.FC<IRsvpStatusModal> = ({
  onClose,
  value,
  handleChange,
}) => {
  return (
    <Modal onClick={onClose}>
      <RadioGroup
        aria-label="rsvp"
        name="rsvp"
        value={value}
        onChange={handleChange}
      >
        <RadioWithText title="Yes" value={E_RSVP_Type.YES} />
        <RadioWithText title="No" value={E_RSVP_Type.NO} />
      </RadioGroup>
    </Modal>
  );
};
interface IMembersList {
  onClick: () => void;
}

const MembersList: React.FC<IMembersList> = ({ onClick }) => {
  return (
    <Modal onClick={onClick}>
      <div className={classes["listUsers"]}>
        {Event_Users_List.map((user, index) => {
          return (
            <div key={index} className={classes["listUserContainer"]}>
              <img
                src={user.image}
                alt="icon"
                className={classes["listUserIcon"]}
              />
              <div className={classes["listUserName"]}>{user.name}</div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};
