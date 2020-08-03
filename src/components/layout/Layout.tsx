import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { SendMessage } from './SendMessage';
import { MessagesList } from './MessagesList';
import { MessagesContext } from '../../store/MessagesContext';
import * as actions from '../../store/actionTypes';

const { Header, Content, Footer, Sider } = Layout;
interface FormValues {
  message: string;
}
interface Props {
  leave: () => void;
}

export const LayoutComponent: React.FC<Props> = ({ leave }) => {
  const { state, dispatch } = useContext(MessagesContext);

  const handleSubmit = async (values: any) => {
    console.log(values);
    return dispatch({ type: actions.SEND_MESSAGE });
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Chat Room
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Call Room
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />} onClick={leave}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, color: 'white' }}
        >
          HI
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* <video
              // ref={videoRef}
              // hidden={!isVideoPlaying}
              // onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
            /> */}
            <MessagesList />
            <SendMessage submit={handleSubmit} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
