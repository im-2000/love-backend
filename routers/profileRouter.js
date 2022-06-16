const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../models").user;
const Profile = require("../models").profile;
const Favorite = require("../models").favorite;

const router = new Router();

// ALL PROFILES

router.get("/", async (req, res, next) => {
  try {
    res.send(await Profile.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// PROFILE BY ID include LIKE (details page)

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Profile id is not a number" });
  }

  const profile = await Profile.findByPk(id, { model: User, as: "fav" });

  if (profile === null) {
    return res.status(404).send({ message: "Profile not found" });
  }

  res.status(200).send({ message: "ok", profile });
});

// POST NEW PROFILE

router.post("/", auth, async (req, res, next) => {
  try {
    const {
      name,
      age,
      gender,
      imageUrl,
      about,
      language,
      location,
      githubUrl,
      userId,
    } = req.body;
    const user = req.user;

    if (
      !name ||
      !age ||
      !gender ||
      !imageUrl ||
      !about ||
      !location ||
      !githubUrl
    ) {
      res.status(400).send("missing parameters");
    }
    if (user) {
      const newProfile = await Profile.create({
        name,
        age,
        gender,
        imageUrl,
        about,
        language,
        location,
        githubUrl,
        userId: user.id,
      });
      res.send({ message: "Profile created", newProfileId: newProfile.id });
    } else {
      console.log(`User with this id: ${userId} doesn't exist`);
    }
  } catch (e) {
    next(e);
  }
});

// POST FAVORITE

router.post("/favorites", auth, async (req, res, next) => {
  try {
    const { userId, profileId } = req.body;
    console.log("userId", "profileId", userId, profileId);

    const specificFavs = await Favorite.findOne({
      where: { userId, profileId },
    });
    const profile = await Profile.findByPk(parseInt(profileId));
    if (!specificFavs) {
      const favs = await Favorite.create({
        userId,
        profileId,
      });
      res.send(profile);
    } else {
      const deleteFavs = await specificFavs.destroy();
      res.send(profile);
    }

    // check if this combo already exists in favs

    // if it does, delete

    // if not, add.
  } catch (e) {
    next(e);
  }
});
module.exports = router;
