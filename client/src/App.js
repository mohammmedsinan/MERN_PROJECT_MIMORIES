import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import FormInput from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts';

const { Header, Footer, Content, Sider } = Layout;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <Layout>
        <Header style={{ color: 'white' }}>Header</Header>
        <Layout>
          <Content style={{ overflow: 'hidden' }}>
            <FormInput />
            <div style={{ marginTop: '40px', marginBottom: '30px' }}>
              <Posts />
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
