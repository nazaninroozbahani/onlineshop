import React, { useContext } from "react";
// import ReactGA from "react-ga";
import { UNSAFE_NavigationContext } from "react-router-dom";

const RouteChangeTracker = () => {
  const navigation = useContext(UNSAFE_NavigationContext).navigator;

  navigation.listen((locationListener, action) => {
    console.log("listen: ", locationListener.location);
    // ReactGA.set({ page: locationListener.location.pathname });
    // ReactGA.pageview(locationListener.location.pathname);
  });

  return <div></div>;
};

export default RouteChangeTracker;
