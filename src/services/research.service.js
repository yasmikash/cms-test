const HTTPException = require("../exceptions/HTTPException");
const ResearchTopicModel = require("../models/research-topic.model");
const Research = require("../models/research.model");

module.exports = class ResearchService {
  createResearchTopic = async (data) => {
    const researchTopic = new ResearchTopicModel(data);
    const researchTopicCreated = await researchTopic.save();
    return researchTopicCreated;
  };

  createResearch = async (data) => {
    const research = new Research({
      ...data,
      user: data.user.id,
      createdDate: new Date(),
    });
    const researchCreated = await research.save();
    return researchCreated;
  };

  getResearch = async (userId) => {
    const research = await Research.find({ user: userId });
    return research;
  };
};
