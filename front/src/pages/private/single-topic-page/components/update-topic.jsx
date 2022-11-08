/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { post } from '../../../../plugins/http';
import Button from '../../common-components/button';

function UpdateTopic({ topic, setTopic, setClose }) {
  const titleRef = useRef(topic.title);
  const contentRef = useRef();

  const updateTopic = async () => {
    const topicData = {
      id: topic._id,
      secret: localStorage.getItem('secret'),
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    const res = await post('updateTopic', topicData);

    if (!res.error) {
      const topicCopy = { ...topic };
      topicCopy.title = res.data.title;
      topicCopy.content = res.data.content;

      setTopic(topicCopy);
    }
    setClose(false);
  };

  return (
    <div className="center">
      <div className="center topic-container">
        <input defaultValue={topic.title} ref={titleRef} type="text" placeholder="title" className="input" />
        <textarea defaultValue={topic.content} ref={contentRef} type="text" placeholder="topic content" rows="6" cols="20" className="input" />
        <Button func={updateTopic} className="button" type="button" text="Submit changes" />

      </div>
    </div>
  );
}

export default UpdateTopic;
