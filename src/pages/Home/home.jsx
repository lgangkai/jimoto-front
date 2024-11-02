import MyFooter from "@/components/Header/Footer/footer";
import ContentList from "@/pages/Home/Components/ContentList/content_list";
import {Helmet} from "react-helmet";
import AppHeader from "@/components/Header/AppHeader/app_header";
import FilterBar from "@/pages/Home/Components/FilterBar/filter_bar";
import "./home.css"

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
            <div className="home-body">
                <FilterBar/>
                <ContentList/>
            </div>
            <MyFooter></MyFooter>
        </div>
    );
}

export default Home;
