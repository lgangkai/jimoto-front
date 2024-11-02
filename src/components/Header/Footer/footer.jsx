import { Layout } from 'antd';
const {Footer } = Layout;


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