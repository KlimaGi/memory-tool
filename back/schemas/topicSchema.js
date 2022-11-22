const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
  userIdSecret: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  startDay: {
    type: [Number],
    required: true,
  },
  progress: {
    type: [[Number], [Number], [Number], [Number], [Number]],
    required: true,
  },
  progressDone: {
    type: Number,
    required: true,
  },
  progressDate: {
    type: [Number],
    required: true,
  },
});

const exportUser = mongoose.model('memoTopics', topicSchema);

module.exports = exportUser;
