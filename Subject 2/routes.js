const { Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get("/movie/",controller.getMovie);
router.post("/movie/",controller.addMovie)
router.get("/movie/:id",controller.getMovieById);
router.delete("/movie/:id",controller.removeMovie);
router.put("/movie/:id",controller.updateMovie);

router.get("/actor/",controller.getActor);
router.post("/actor/",controller.addActor)
router.get("/actor/:id",controller.getActorById);
router.delete("/actor/:id",controller.removeActor);
router.put("/actor/:id",controller.updateActor);

router.get("/users/",controller.getUsers);
router.post("/users/",controller.addUsers)
router.get("/users/:id",controller.getUsersById);
router.delete("/users/:id",controller.removeUsers);
router.put("/users/:id",controller.updateUsers);

module.exports = router;