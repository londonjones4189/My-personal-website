import PageTemplate from "./PageTemplate";
import PlaceHolder from "./assets/headshot.jpeg"; // Placeholder image for the project

function Developer() {
  console.log("Developer page loaded");

  const cardsData = [
    {
      image: PlaceHolder,
      header: "Project 1",
      description: "This is a description of project 1"
    }
  ];

  return PageTemplate("Hello this is my software portfolio", cardsData);
}

export default Developer;
