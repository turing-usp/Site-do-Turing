import ReactGA from "react-ga";

export class reactGoogleAnalytics {
  constructor() {
    ReactGA.initialize("UA-172369469-1");
  }

  pageView(pageName) {
    ReactGA.pageview(pageName);
  }
}
