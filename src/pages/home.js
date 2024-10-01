import HeaderWithSearch from "../components/header";
import MyFooter from "../components/footer";
import ContentList from "../components/content_list";
import Item from "../components/item";

function Home() {
    document.title = "ジモト ｰ ホーム"
    return (
        <div className="App">
            <HeaderWithSearch onlyShowLogo={false}></HeaderWithSearch>
            <ContentList/>
            <MyFooter></MyFooter>
        </div>
    );
}

export default Home;
