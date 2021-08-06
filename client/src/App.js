import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import FormInput from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/Posts';

const { Header, Footer, Content, Sider } = Layout;
function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const newPosts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch, newPosts, newPosts.likeCount]);
  return (
    <div>
      <Layout>
        <Header style={{ color: 'white' }}>Header</Header>
        <Layout>
          <Content style={{ overflow: 'hidden' }}>
            <FormInput currentId={currentId} setCurrentId={setCurrentId} />
            <div style={{ marginTop: '40px', marginBottom: '30px' }}>
              <Posts setCurrentId={setCurrentId} />
            </div>
          </Content>
          <div style={{ backgroundColor: 'white' }}></div>
        </Layout>
        <Footer style={{ backgroundColor: 'lightgray', textAlign: 'center', fontWeight: 'bold' }}>
          Footer
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
