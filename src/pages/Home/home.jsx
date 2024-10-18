import MyFooter from "../../components/footer";
import ContentList from "../../components/content_list";
import {Helmet} from "react-helmet";
import AppHeader from "../../components/Header/AppHeader/app_header";

function Home() {
    return (
        <div className="home">
            <Helmet>
                <title>ジモト ｰ ホーム</title>
                <meta name="description" content="ジモト"/>
                <meta name="keywords" content="ジモト"/>
                <link rel="canonical" href={""}/>
            </Helmet>
            <AppHeader onlyShowLogo={false}/>
            <ContentList/>
            <MyFooter></MyFooter>
        </div>
    );
}

export default Home;
