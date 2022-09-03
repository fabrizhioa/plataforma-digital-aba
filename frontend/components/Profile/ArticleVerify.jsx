import React from "react";
import { InputFileForm, InputForm } from "../UI/InputForm";

const ArticleVerify = ({ view, user, edited, OnChange }) => {
  return (
    <article className={(view ? "grid" : "hidden") + " md:grid-cols-2 gap-4"}>
      <InputForm
        type="email"
        name="email"
        title="Correo"
        onChange={OnChange}
        defaultValue={user.email}
        value={edited.email}
        disabled={true}
      />
      <InputForm
        type="number"
        name="phone"
        title="Telefono"
        onChange={OnChange}
        defaultValue={user.phone}
        value={edited.phone}
      />
      <div className="md:col-span-2">
        <p className="text-gray-600">Foto de identificación</p>
        <div className="p-2 bg-white rounded-sm inline-block">
          {
            <img
              src={user.idPhoto}
              id="idPhoto"
              alt="user id photo"
              className="w-[300px] aspect-[3/2] rounded-sm"
            />
          }

          {!user.idPhoto && (
            <InputFileForm
              name="imagenId"
              title="Subir Id de identificacion"
              onChange={(img) => {
                document.getElementById("idPhoto").src =
                  URL.createObjectURL(img);
                OnChange({ imagenId: img });
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleVerify;
