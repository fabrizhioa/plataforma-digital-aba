import React from "react";
import { InputForm } from "../../UI/InputForm";

const AliasModal = ({ close, OnChange, Submit, alias, editedAlias }) => {
  return (
    <div className="fixed flex justify-center align-center top-0 left-0 w-full h-full bg-black/30">
      <form
        action=""
        className="bg-slate-200 rounded-sm p-2 m-auto w-max h-max grid gap-4"
      >
        <InputForm
          title="Alias"
          name="alias"
          type="text"
          onChange={OnChange}
          defaultValue={alias}
          value={editedAlias}
        />
        <button
          onClick={Submit}
          className="bg-slate-900 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
        >
          Cambiar
        </button>
        <button
          type="button"
          onClick={close}
          className="bg-red-900 text-white px-4 py-2 rounded-sm hover:bg-red-700"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default AliasModal;
