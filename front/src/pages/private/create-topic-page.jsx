import React, { useRef } from 'react'
import { post } from '../../plugins/http';
import { useNavigate } from 'react-router-dom';

const CreateTopicPage = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const nav = useNavigate();

  const createTopic = async () => {
    const topicData = {
      secret: localStorage.getItem('secret'),
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    console.log('topicData', topicData);
    const res = await post('topicData', topicData);
    console.log('topicData-res', res);
    nav('/dashboard/allTopics');
  };


  return (
    <div className='center'>
      <input ref={titleRef} type='text' placeholder='title' className='input' />
      <textarea ref={contentRef} type='text' placeholder='topic content' rows="6" cols="20" className='input' />
      <button onClick={createTopic} className='button'>Create</button>
    </div>
  )
}

export default CreateTopicPage;
