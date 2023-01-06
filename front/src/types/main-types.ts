import { Dispatch, SetStateAction } from "react";

export interface TopicInterface {
  userIdSecret: String,
  title: String,
  content: String,
  startDay: [Number],
  progress: [[Number], [Number], [Number], [Number], [Number]],
  progressDone: Number,
  progressDate: String,
}

export interface UserInterface {
  email: String,
  password: String,
  secret: String,
  photo: String,
}

export interface MainContextInterface {
  topics: TopicInterface[] | null,
  user: UserInterface | null,
  setTopics: Dispatch<SetStateAction<TopicInterface[] | null>>,
  setUser: Dispatch<SetStateAction<UserInterface | null>>
}