import React from "react";
import { InputForm, VerifyInputForm } from "../UI/InputForm";

const VerifyPass = (target, newpassword, verify) => {
  if (newpassword === verify) {
    target.classList.remove("border-2", "border-red-700");
    target.classList.add("border-2", "border-blue-700");
  } else {
    target.classList.remove("border-2", "border-blue-700");
    target.classList.add("border-2", "border-red-700");
  }
};

const ArticleSecurity = ({ view, user, edited, OnChange }) => {
  return (
    <article className={(view ? "grid" : "hidden") + " gap-4 py-2"}>
      <InputForm
        type="password"
        title="Nueva clave"
        name="password"
        onChange={OnChange}
        defaultValue=""
        value={edited.password}
        required={false}
        disabled={false}
      />
      <VerifyInputForm
        type="password"
        title="Re - Nueva clave"
        name="renewpassword"
        onChange={(target) => VerifyPass(target, edited.password, target.value)}
      />
    </article>
  );
};

export default ArticleSecurity;
