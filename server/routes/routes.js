const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const router = express.Router();
const User = require("../models/user");

//GET USER DATA
router.get("/user", async (req, res) => {
  const user = await User.find({});
  res.json(user);
});

//UPDATE USER DATA
router.put("/user", async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  // imagen id

  if (req.files !== null && req.files.imagenId !== undefined) {
    let imagenId = req.files.imagenId;
    const url = path.join(
      "./server/public/uploads/id",
      req.body.iduser + imagenId.name.slice(-4)
    );

    const publicUrl = path.join(
      "./uploads/id",
      req.body.iduser + imagenId.name.slice(-4)
    );

    imagenId.mv(url);

    req.body.idPhoto = publicUrl;
  }

  // imagen de perfil

  if (req.files !== null && req.files.imagenProfile !== undefined) {
    let imagenProfile = req.files.imagenProfile;
    const url = path.join(
      "./server/public/uploads/",
      req.body.iduser + imagenProfile.name.slice(-4)
    );

    const publicUrl = path.join(
      "./uploads/",
      req.body.iduser + imagenProfile.name.slice(-4)
    );

    imagenProfile.mv(url);

    req.body.userPhoto = publicUrl;
  }

  // datos generales editables
  await User.findByIdAndUpdate(
    req.body.iduser,
    {
      ...req.body,
    },
    { new: true }
  )
    .then((resp) => {
      res.json({ data: resp, res: "modificacion exitosa" });
    })
    .catch((err) => res.json("modificacion fracasada"));
});

module.exports = router;
