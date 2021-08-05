import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Spin, Card, Image } from 'antd';
import './style.css';

function Posts() {
  const post = useSelector((state) => state.posts);
  const { Meta } = Card;

  return (
    <>
      <Row
        gutter={[16, 24]}
        style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}
      >
        {!post.length ? (
          <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
        ) : (
          post.map((data) => {
            return (
              <Col className="gutter-row" span={8}>
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
                    <p style={{ fontSize: '10px', margin: ' 5px 0px', color: 'gray' }}>
                      #{data.tags}
                    </p>
                  ))}
                  <Meta
                    title={data.title}
                    description={
                      <p style={{ fontSize: '12px', fontWeight: 'bold' }}>`${data.message}`</p>
                    }
                  />
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
