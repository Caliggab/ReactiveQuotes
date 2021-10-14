import { Route } from "react-router-dom";

const Welcome = () => {
    return <section>
        <h1> WELCOME page</h1>
        <Route path="/welcome/new-user">
            <h2>Welcome aboard, young childd</h2> 
        </Route>
        </section>
}

export default Welcome;