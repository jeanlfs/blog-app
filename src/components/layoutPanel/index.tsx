import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { UserOutlined, FormOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { UserDropdown } from './userDropdown';
import { Footer } from 'antd/lib/layout/layout';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const LayoutPanel = ({children, paths} : {children : JSX.Element, paths : string[]}) => {
    const navigate = useNavigate();

    async function openPanel() {
        navigate('/users');
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo-title">
                    <a style={{ color: 'white' }} onClick={() => openPanel()}>
                        Blog
                    </a>
                </div>
                <div className="avatar">
                    <div>
                        <Avatar icon={<UserOutlined />} />
                        <UserDropdown/>
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['users']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="users" icon={<UserOutlined />} title="Usuários">
                            <Menu.Item key="1" onClick={() => navigate('/users')}>Listar Usuários</Menu.Item>
                            <Menu.Item key="2" onClick={() => navigate('/users/create')}>Criar Usuário</Menu.Item>
                        </SubMenu>
                        <SubMenu key="posts" icon={<FormOutlined />} title="Publicações">
                            <Menu.Item key="3" onClick={() => navigate('/posts')}>Listar Publicações</Menu.Item>
                            <Menu.Item key="4" onClick={() => navigate('/posts/create')}>Criar Publicação</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {paths.map((path, i) => {        
                            return (<Breadcrumb.Item>{path}</Breadcrumb.Item>) 
                        })}
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: '67.8vh',
                    }}
                    >
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Blog ©2022</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}