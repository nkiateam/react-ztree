import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './style/App.css';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store/configureStore';
import routes from './routes';
const { Content, Footer, Sider } = Layout;
const store = createStore;

class App extends Component {

    constructor(props) {
        super(props);
        this._renderMenu = this._renderMenu.bind(this);
        this._renderContents = this._renderContents.bind(this);
    }

    _renderMenu() {
        const createMenuKeyByPathname = () => {
            const pathname = location ? location.pathname : '';
            const key = typeof pathname === 'string' ? pathname.replace('/', '') : '';
            return key;
        };

        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[createMenuKeyByPathname()]}>
                    {/* Sample Menu */}
                    <Menu.Item key="basic">
                        <Link to="/basic">
                            <span className="nav-text">기본 Tree</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="checkbox">
                        <Link to="/checkbox">
                            <span className="nav-text">체크박스 Tree</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="icon">
                        <Link to="/icon">
                            <span className="nav-text">아이콘 Tree</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="ajaxurl">
                        <Link to="/ajaxurl">
                            <span className="nav-text">Ajax Tree - URL</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="ajaxload">
                        <Link to="/ajaxload">
                            <span className="nav-text">Ajax Tree - Load</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="ajaxredux">
                        <Link to="/ajaxredux">
                            <span className="nav-text">Ajax Tree - Redux</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="expandnodelevel">
                        <Link to="/expandnodelevel">
                            <span className="nav-text">레벨(Depth) 노드 확장 Tree</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="expcol">
                        <Link to="/expcol">
                            <span className="nav-text">전체 확장/접기</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="state">
                        <Link to="/state">
                            <span className="nav-text">State - 최종 선택 유지(미구현)</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }

    _renderContents() {
        return (
            <Content style={{
                margin: '12px 12px 0 12px',
                padding: 16,
                backgroundColor: 'white',
            }}>
                {routes}
            </Content>
        )
    }

    _renderFooter() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Polestar UI/UX Framework ©2017 Created by NKIA
            </Footer>
        )
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout style={{ height: '100%' }}>
                        {this._renderMenu()}
                        <Layout style={{ marginLeft: 200 }}>
                            {this._renderContents()}
                            {this._renderFooter()}
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default App;