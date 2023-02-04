import './scss/app.scss'
import Header from "./components/Header/Header";
import AllCustomers from "./pages/AllCustomers";
import { useState} from "react";
import SideBarActive from "./components/SideBarActive/SideBarActive";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={"wrapper"}>
        <>
            <Header setOpenMenu={setOpenMenu}/>
            <main className={"page"}>
                <AllCustomers />

            </main>
            <footer className={'footer'}>
                <Footer />
            </footer>
            {openMenu && (<SideBarActive setOpenMenu={setOpenMenu}/>)}
        </>
        </div>
    );
}

export default App;
