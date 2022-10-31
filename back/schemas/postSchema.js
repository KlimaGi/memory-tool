const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  startDay: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    required: true
  },
  progressUpdateDate: {
    type: String,
    required: true
  }
});

const exportUser = mongoose.model("memoTopicSchema", topicSchema);

module.exports = exportUser;