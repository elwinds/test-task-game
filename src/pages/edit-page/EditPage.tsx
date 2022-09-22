import * as React from "react";
import Header from "../../components/common/header/Header";
import EditOptions from "../../components/edit/edit-options/EditOptions";

const EditPage = () => {
  return (
    <>
      <Header header={"Изменение персонажа"} />
      <EditOptions />
    </>
  );
};

export default EditPage;
