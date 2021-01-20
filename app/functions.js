const mm = require("music-metadata");
const path = require("path");
module.exports = {
  async readAudioTags(filePath) {
    try {
      return await mm.parseFile(filePath);
    } catch (error) {
      console.warn(error);
      return {
        common: {
          title: path.basename(filePath, path.extname(filePath)),
          album: "",
          artist: "",
        },
      };
    }
  },
};
