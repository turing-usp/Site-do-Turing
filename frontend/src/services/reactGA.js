import ReactGA from "react-ga";

export class reactGoogleAnalytics {
  constructor() {
    ReactGA.initialize(GA_API_KEY);
  }

  pageView(pageName) {
    ReactGA.pageview(pageName);
  }
}
