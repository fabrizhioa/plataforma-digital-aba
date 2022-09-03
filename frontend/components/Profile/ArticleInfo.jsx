import React from "react";
import { InputForm, TextAreaForm } from "../UI/InputForm";

const ArticleInfo = ({ view, user, OnChange, edited }) => {
  return (
    <article
      className={(view === true ? "grid" : "hidden") + " md:grid-cols-2 gap-4"}
    >
      <InputForm
        type="text"
        title="Nombre"
        name="firstName"
        disabled={true}
        defaultValue={user.firstName}
        onChange={OnChange}
        value={edited.firstName}
      />
      <InputForm
        type="text"
        title="Apellido"
        name="LastName"
        disabled={true}
        defaultValue={user.lastName}
        onChange={OnChange}
        value={edited.lastName}
      />
      <InputForm
        type="text"
        title="País"
        name="country"
        defaultValue={user.country}
        onChange={OnChange}
        value={edited.country}
      />
      <InputForm
        type="date"
        name="birthDate"
        title="Fecha de nacimiento"
        onChange={OnChange}
        defaultValue={
          user["birthDate"] !== undefined && user["birthDate"].slice(0, 10)
        }
        value={edited["birthDate"]}
      />
      <TextAreaForm
        title="Descripcion breve"
        name="description"
        cols="30"
        rows="10"
        max="400"
        boxClassName="md:col-span-2"
        onChange={OnChange}
        defaultValue={user.description}
        value={edited.description}
      ></TextAreaForm>
    </article>
  );
};

export default ArticleInfo;
