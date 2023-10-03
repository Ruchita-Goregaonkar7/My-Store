import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () =>{
    return(
        <div>
            <h1>My App</h1>
            <Header/>
            <div style={{height:'100px'}}></div>
            <Footer/>
        </div>
    );
};

export default App;