import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CurrentUserEffect from "./atom-effects/current-user-effect.atom-effect";

import Navigation from "./components/navigation/navigation.component";
import Checkout from "./routes/checkout.component";
import Home from "./routes/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up.component";

export default function App() {
    return (
        <RecoilRoot>
            <CurrentUserEffect />
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </RecoilRoot>
    );
}
