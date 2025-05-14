import React, { memo } from "react";
import coursecontent from "./Coursecontent";
import Courses from "./Courses";
function CourseList() {
  return (
    <>
      <div className="ir do">
        <div className="h-full flex w-full justify-center items-center p-8"></div>
        <Courses another={coursecontent} />
      </div>
    </>
  );
}

export default memo(CourseList);
