const { Router } = require("express");
const auth = require("../auth/middleware");
const Profile = require("../models").profile;

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

// PROFILE BY ID (details page)

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Profile id is not a number" });
  }

  const profile = await Profile.findByPk(id);

  if (profile === null) {
    return res.status(404).send({ message: "Profile not found" });
  }

  res.status(200).send({ message: "ok", profile });
});

// // DELETE STORY

// router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
//   try {
//     const { spaceId, storyId } = req.params;
//     const story = await Story.findByPk(storyId, { include: [Space] });
//     if (!story) {
//       return res.status(404).send("Story not found");
//     }

//     // Check if this user is the owner of the space
//     if (story.space.userId !== req.user.id) {
//       return res.status(401).send("You're not authorized to delete this story");
//     }

//     await story.destroy();

//     res.send({ message: "ok", storyId });
//   } catch (e) {
//     next(e);
//   }
// });

// // POST a new story to space with corresponding `id`

// router.post("/:id/stories", auth, async (req, res) => {
//   const space = await Space.findByPk(req.params.id);
//   console.log(space);

//   if (space === null) {
//     return res.status(404).send({ message: "This space does not exist" });
//   }

//   if (!space.userId === req.userId) {
//     return res
//       .status(403)
//       .send({ message: "You are not authorized to update this space" });
//   }

//   const { name, content, imageUrl } = req.body;

//   if (!name) {
//     return res.status(400).send({ message: "A story must have a name" });
//   }

//   const story = await Story.create({
//     name,
//     content,
//     imageUrl,
//     spaceId: space.id,
//   });

//   return res.status(201).send({ message: "Story created", story });
// });

// // PATCH - update space details

// router.patch("/:id", auth, async (req, res) => {
//   const space = await Space.findByPk(req.params.id);
//   if (!space.userId === req.user.id) {
//     return res
//       .status(403)
//       .send({ message: "You are not authorized to update this space" });
//   }

//   const { title, description, backgroundColor, color } = req.body;

//   await space.update({ title, description, backgroundColor, color });

//   return res.status(200).send({ space });
// });

module.exports = router;
