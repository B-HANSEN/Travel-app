import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./containers/Home/actions"
import Headers from "./components/Headers";
import Home from "./containers/Home/";
import Cities from "./containers/Cities/";
import CreateItinerary from "./containers/CreateItinerary/";
import MYtinerary from "./containers/MYtinerary/";
import Favorites from "./containers/Favorites/";

// configure enzyme to use adapter
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Headers />
            <Route exact path="/" component={Home} />
            <Route path="/createitinerary" component={CreateItinerary} />
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:cityId" component={MYtinerary} />
            <Route path="/favorites/:userId" component={Favorites} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
