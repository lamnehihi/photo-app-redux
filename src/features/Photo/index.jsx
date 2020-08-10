import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import NotFound from "components/NotFound";
import MainPage from "./pages/Main";
import AddEditPage from "./pages/AddEdit";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={MainPage}></Route>

        <Route exact path={`${match.url}/add`} component={AddEditPage}></Route>
        <Route
          exact
          path={`${match.url}/:photoId`}
          component={AddEditPage}
        ></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default Photo;
