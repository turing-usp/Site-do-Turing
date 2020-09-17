import React from "react";
import { reactGoogleAnalytics } from "./reactGA";

export default function usePageView(pageName) {
  const { current: GA } = React.useRef(new reactGoogleAnalytics());

  React.useEffect(() => {
    GA.pageView(pageName);
  }, []);
}
