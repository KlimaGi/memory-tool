/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
// import { post } from '../../../../plugins/http';
import Button from '../../common-components/button';

function UpdateTopic({ topic, setClose }) {
  console.log('topic', topic);
  const titleRef = useRef(topic.title);
  const contentRef = useRef();

  const updateTopic = () => {
    const topicData = {
      secret: localStorage.getItem('secret'),
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    console.log('topicData', topicData);
    // todo: add update pist route, controller

    // const res = await post('topicData', topicData);
    // console.log('topicData-res', res);
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
