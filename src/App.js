import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "utils/ScrollToTop";
import {
  HomePage,
  ErrorPage,
  SingleProduct,
  ProductsPages,
  ContactPage,
} from "./pages";
import { Navbar, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product">
            <SingleProduct />
          </Route>
          <Route exact path="/products">
            <ProductsPages />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
