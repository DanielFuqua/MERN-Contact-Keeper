import React, { useContext, useEffect, useRef } from "react";
import contactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(contactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
