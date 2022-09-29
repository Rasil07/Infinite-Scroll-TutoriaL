import React from "react";
import { useIntersection } from "../../hooks";
import "./style.css";

export const InfiniteScrollTrigger = ({ callbackFn }) => {
  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "100px");

  React.useEffect(() => {
    if (isVisible) {
      callbackFn();
    }
  }, [callbackFn, isVisible]);

  return <div className="infinite_scroll_trigger" ref={triggerRef}></div>;
};
