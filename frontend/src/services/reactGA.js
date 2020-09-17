import ReactGA from "react-ga";

export class reactGoogleAnalytics {
  constructor() {
    ReactGA.initialize("UA-178410033-1");
  }

  pageView(pageName) {
    ReactGA.pageview(pageName);
  }
}
