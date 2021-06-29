const ResearchService = require("../services/research.service");

module.exports = class UserController {
  constructor() {
    this.researchService = new ResearchService();
  }

  createResearchTopic = async (req, res, next) => {
    try {
      const researchTopic = await this.researchService.createResearchTopic(
        req.body
      );
      res.json(researchTopic);
    } catch (error) {
      next(error);
    }
  };

  createResearch = async (req, res, next) => {
    try {
      const research = await this.researchService.createResearch(
        req.body,
        req.body.user.id,
        req.files
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  getResearch = async (req, res, next) => {
    try {
      const research = await this.researchService.getResearch(
        req.params.userId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  getAllResearch = async (req, res, next) => {
    try {
      const research = await this.researchService.getAllResearch();
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  UpdateResearch = async (req, res, next) => {
    try {
      const research = await this.researchService.UpdateResearch(
        req.body,
        req.body.id,
        req.files
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  getResearchById = async (req, res, next) => {
    try {
      const research = await this.researchService.getResearchById(
        req.params.researchId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  deleteResearchById = async (req, res, next) => {
    try {
      const research = await this.researchService.deleteResearchById(
        req.params.researchId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };
};
