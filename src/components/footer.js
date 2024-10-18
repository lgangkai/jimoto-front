import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from "./Header/AppHeader/app_header";
const { Header, Content, Footer } = Layout;


function MyFooter() {
    return <Footer
        style={{
            textAlign: 'center',
        }}
    >
        jimoto ©{new Date().getFullYear()} Created by Gangkai Li
    </Footer>
}

export default MyFooter;