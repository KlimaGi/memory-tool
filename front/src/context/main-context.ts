import { createContext } from 'react';

interface TopicInterface {
  userIdSecret: String,
  title: String,
  content: String,
  startDay: [Number],
  progress: [[Number], [Number], [Number], [Number], [Number]],
  progressDone: Number,
  progressDate: String,
}

interface MainContextInterface {
  topics: TopicInterface[],

}

const MainContext = createContext<TopicInterface | null>(null);

export default MainContext;
