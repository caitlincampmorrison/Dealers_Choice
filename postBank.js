const data = [
    { id: 1, title: "Take dog out", content: "Must take dog on a 15-30 min walk around the neighborhood.", time: "3x a day"},
    { id: 2, title: "Take out trash", content: "As soon as the kitchen trash get full take it to the trashcan outside.", time: "2x a week"},
    { id: 3, title: "Do code stretch", content: "Solve coding problem", time: "Everyday"},
    { id: 4, title: "Watch pre-lecture video", content: "Watch and take notes on prelecture videos.  There may be more than one video and each video may be 20 min to a hour.  Make sure to code alongside examples provided.", time: "Everyday" },
    { id: 5, title: "Make dinner", content: "Go to the kitchen and figure out what is in the refrigerator.  Compare that to what you're feeling that day.  First chop ingrediants and then cook them.  Make sure to clean while you a cooking.", time: "Every night"},
    { id: 6, title: "Unload the dishwasher", content: "Carefully unload all the dishes in the dishwasher and put the clean dishes away in their respective places.", time: "Every other day"},
  ];

  const list = () => {
    return [...data] 
  };
  const find = (id) => {
    const post = data.find(post => post.id === id*1);
    return {...post};
  };
  
  module.exports = { list: list, find: find };