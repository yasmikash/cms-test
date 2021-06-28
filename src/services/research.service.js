const v4 = require("uuid").v4;

const HTTPException = require("../exceptions/HTTPException");
const ResearchTopicModel = require("../models/research-topic.model");
const ResearchModel = require("../models/research.model");
const ResearchNoticeModel = require("../models/research-notice.model");
const config = require("../util/config");

module.exports = class ResearchService {
  createResearchTopic = async (data) => {
    const researchTopic = new ResearchTopicModel(data);
    const researchTopicCreated = await researchTopic.save();
    return researchTopicCreated;
  };

  createResearch = async (data, userId, files) => {
    if (!files)
      throw HTTPException.createValidationError(
        "Research paper file should be uploaded"
      );
    const researchFile = `${v4()}.pdf`;
    await files.researchFile.mv(`${config.uploadPath}/${researchFile}`);

    const research = new ResearchModel({
      ...data,
      user: userId,
      researchFile,
      createdDate: new Date(),
    });
    const researchCreated = await research.save();
    return researchCreated;
  };

  getResearch = async (userId) => {
    const research = await ResearchModel.find({ user: userId });
    return research;
  };

  createResearchNotice = async (userId, researchId) => {
    const research = await ResearchModel.find(researchId);
    const researchNotice = new ResearchNoticeModel({
      ...research,
      createdDate: new Date(),
      user: userId,
    });
    const createdNotice = await researchNotice.save();
    return createdNotice;
  };
};
