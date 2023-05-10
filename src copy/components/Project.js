import React from "react";
import projectData from '../projectData.json';

function Project() {
  return (
    <>
      <h2>Project </h2>
      <ul>
        {projectData.map((entry, index) => <li key={index}>{entry.title}</li>)}
      </ul>
    </>
  );
}

export default Project;
