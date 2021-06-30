const KeynoteService = require("../services/keynote.service");

module.exports = class UserController {
  constructor() {
    this.keynoteService = new KeynoteService();
  }

  createKeynote = async (req, res, next) => {
    try {
      const keynote = await this.keynoteService.createKeynote(
        req.body,
        req.body.user.id,
        req.files
      );
      res.json(keynote);
    } catch (error) {
      next(error);
    }
  };

  getKeynote = async (req, res, next) => {
    try {
      const keynote = await this.keynoteService.getKeynote(
        req.params.keynoteid
      );
      res.json(keynote);
    } catch (error) {
      next(error);
    }
  };

  getAllKeynotes = async (req, res, next) => {
    try {
      const keynote = await this.keynoteService.getAllKeynotes();
      res.json(keynote);
    } catch (error) {
      next(error);
    }
  };
};
