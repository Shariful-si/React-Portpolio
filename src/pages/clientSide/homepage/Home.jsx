
import AboutMe from "./AboutMe";
import ClientsReview from "./ClientsReview";
import Introduction from "./Introduction";
import Service from "./Service";
import Work from "./Work";
import Workprocess from "./Workprocess";

const Home = () =>{
    return (
        <div className="">
            <Introduction></Introduction>  
            <Service></Service>
            <Work></Work>
            <Workprocess></Workprocess>
            <ClientsReview></ClientsReview>
            <AboutMe></AboutMe>
            
        </div>

    )
}

export default Home;