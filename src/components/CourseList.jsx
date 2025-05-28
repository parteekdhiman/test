import React, { memo } from "react";
import coursecontent from "./Coursecontent";
import Courses from "./Courses";
function CourseList() {
  return (
    <>
      <div>
        <div className="coustem"></div>
        <Courses another={coursecontent} />
      </div>
    </>
  );
}

export default memo(CourseList);
