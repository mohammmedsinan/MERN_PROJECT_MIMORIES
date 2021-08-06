import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Spin, Card, Image } from 'antd';
import './style.css';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../actions/Posts';

function Posts({ setCurrentId }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  const { Meta } = Card;

  return (
    <>
      <Row
        gutter={[216, 24]}
        style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}
      >
        {!post.length ? (
          <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
        ) : (
          post.map((data) => {
            return (
              <Col className="gutter-row" span={8} key={data._id}>
                <Card
                  hoverable
                  style={{ width: 280 }}
                  cover={
                    <Image
                      width={280}
                      height={200}
                      src={data.selectedFile}
                      style={{ borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px' }}
                    />
                  }
                >
                  <hr />
                  <h1
                    style={{
                      margin: '3px 0px',
                      padding: '0px',
                      color: '#a130bd',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {data.creator}
                  </h1>
                  <hr />

                  {data.tags.map((e) => (
                    <p
                      style={{
                        fontSize: '10px',
                        margin: ' 5px 0px',
                        color: 'gray',
                        display: 'inline',
                        margin: '0px 2px',
                      }}
                      key={e}
                    >
                      #{e}
                    </p>
                  ))}
                  <Meta
                    title={data.title}
                    description={
                      <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{data.message}</p>
                    }
                  />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Button onClick={() => dispatch(deletePost(data._id))}>Delete</Button>
                      <Button onClick={() => setCurrentId(data._id)} style={{ marginTop: '10px' }}>
                        Edit
                      </Button>
                    </div>
                    <div>
                      <Button onClick={() => dispatch(likePost(data._id))}>&nbsp;Like&nbsp;</Button>
                      <span style={{ marginLeft: '5px' }}>: {data.likeCount}</span>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </>
  );
}

export default Posts;
