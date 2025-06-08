import PageTemplate from "./PageTemplate";t

function Developer() {
  console.log("Developer page loaded");

  const cardsData = [
    {
      header: "Project 1",
      description: "This is a description of project 1"
    }
  ];

  return PageTemplate("Hello this is my software portfolio", cardsData);
}

export default Developer;
