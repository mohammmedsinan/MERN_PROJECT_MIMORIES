import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/Posts';

function FormInput() {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const ClearingData = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };
  const dispatch = useDispatch();
  const HandelSubmit = (e) => {
    if (
      postData.creator === '' ||
      postData.title === '' ||
      postData.message === '' ||
      postData.tags === '' ||
      postData.selectedFile === ''
    ) {
    } else {
      dispatch(createPost(postData)).then(() =>
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' }),
      );
    }
  };

  return (
    <>
      <Form name="basic" initialValues={{ remember: true }} onFinish={HandelSubmit}>
        <Input
          style={{ margin: '10px 0px' }}
          placeholder="Creator"
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          value={postData.creator}
        />
        <Input.TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{ margin: '10px 0px' }}
          placeholder="message"
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          value={postData.message}
        />
        <Input
          style={{ margin: '10px 0px' }}
          placeholder="title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />
        <Input
          style={{ margin: '10px 0px' }}
          placeholder="Tags"
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          value={postData.tags}
        />

        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Submit
        </Button>
        <Button type="primary" onClick={ClearingData} style={{ width: '100%', margin: '10px 0px' }}>
          Clearing the form
        </Button>
      </Form>
      <Button style={{ height: 'auto', width: '100%', margin: '10px 0px' }} type="primary">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        />
      </Button>
    </>
  );
}

export default FormInput;
