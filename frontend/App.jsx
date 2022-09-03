import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BSelectView from "./components/UI/ButtonSelectView";
import { FaRegEdit } from "react-icons/fa";
import {
  TextAreaForm,
  InputForm,
  InputFileForm,
} from "./components/UI/InputForm";
import ArticleInfo from "./components/Profile/ArticleInfo";
import ArticleVerify from "./components/Profile/ArticleVerify";
import ArticleSecurity from "./components/Profile/ArticleSecurity";
import AliasModal from "./components/Profile/modals/AliasModal";

const id = "6312c87e897c6b397163a46a"; // esto se sacaria de un window.localStorage

function App() {
  const [userData, setUserData] = useState({});
  const [edited, setEdited] = useState({});
  const [view, setView] = useState(0);
  const [aliasModal, setViewAliasModal] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get("/api/user")
        .then(({ data }) => setUserData(data[0]))
        .catch((err) => console.error(err));
    };

    FetchData();
  }, []);

  const OnChange = (value) => {
    setEdited({ ...edited, ...value });
  };

  const Submit = async () => {
    if (edited.password !== undefined) {
      if (document.getElementById("renewpassword").value !== edited.password) {
        alert("Claves no coinciden");
      }
    }

    const formData = new FormData();

    Object.keys(edited).map((x) => {
      formData.append(x, edited[x]);
    });

    formData.append("iduser", userData._id);

    await axios
      .put("/api/user", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        alert(data.res);
        setUserData(data.data);
        setEdited({});
      });
  };

  const changeImageProfile = async (imagen) => {
    const formData = new FormData();

    formData.append("imagenProfile", imagen);
    formData.append("iduser", userData._id);

    await axios
      .put("/api/user", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        alert(data.res);
        setUserData(data.data);
      });
  };

  return (
    <div className="min-h-screen bg-slate-100 grid grid-rows-[max-content_auto_max-content]">
      <Header />
      <main className="grid md:grid-cols-[auto_max-content] gap-8 p-4 mx-auto max-w-screen-lg w-full h-full self-start">
        <div className="bg-slate-200 rounded-sm p-2 w-full h-max order-2 md:order-1">
          <h3 className="text-3xl text-blue-700 font-semibold p-2 text-center md:text-left">
            Editar Perfil
          </h3>
          <div className="border-b-2 border-gray-300 ring-inset text-center m-auto">
            <BSelectView active={view === 0} func={() => setView(0)}>
              Información
            </BSelectView>
            <BSelectView active={view === 1} func={() => setView(1)}>
              Verificación
            </BSelectView>
            <BSelectView active={view === 2} func={() => setView(2)}>
              Seguridad
            </BSelectView>
          </div>
          <form>
            <ArticleInfo
              view={view === 0}
              user={userData}
              edited={edited}
              OnChange={OnChange}
            />
            <ArticleVerify
              view={view === 1}
              user={userData}
              edited={edited}
              OnChange={OnChange}
            />

            <ArticleSecurity
              view={view === 2}
              user={userData}
              edited={edited}
              OnChange={OnChange}
            />

            <div>
              <button
                type="button"
                className="bg-slate-900 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-sm"
                disabled={Object.keys(edited).length === 0}
                onClick={Submit}
              >
                Actualizar datos
              </button>
            </div>
          </form>
        </div>
        <aside className="bg-slate-200 rounded-sm min-w-[200px] p-2 h-max order-1 md:order-2">
          {/* Foto de perfil */}
          {userData.userPhoto !== undefined && (
            <div className="relative block text-center">
              <img
                id="userPhoto"
                src={userData.userPhoto}
                alt="user image"
                className="aspect-square w-20 rounded-full inline-block mx-auto"
              />
            </div>
          )}
          <div className="p-2 text-center">
            <InputFileForm
              name="imagenProfile"
              title="Subir Imagen"
              onChange={changeImageProfile}
            />
          </div>

          {/* Nombre del usuario */}
          <h2 className="font-regular text-lg text-gray-600 text-center">
            {userData.firstName + " " + userData.lastName}
          </h2>
          <p className="text-gray-600 text-center">@{userData.userName}</p>
          <p className="text-gray-500 text-center">
            Alias:{" "}
            {userData.alias !== undefined ? (
              <>
                {userData.alias}{" "}
                <button onClick={() => setViewAliasModal(true)}>
                  <FaRegEdit />
                </button>
              </>
            ) : (
              <button onClick={() => setViewAliasModal(true)}>
                <FaRegEdit />
              </button>
            )}{" "}
          </p>
        </aside>
      </main>
      {aliasModal && (
        <AliasModal
          close={() => setViewAliasModal(close)}
          Submit={Submit}
          OnChange={OnChange}
          alias={userData.alias}
          editedAlias={edited.alias}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
