import "./App.css";
import Nav from "./Nav";


function App() {
  const firstname = "Zvika";
  const lastname = "brich";

  function NumberRangeChecker(num) {
    if (num <= 50) {
      return <div>the number: {num} is smaller then 50</div>;
    } else if (num > 50 && num <= 100) {
      return <div>the number: {num} is between 50 and 100</div>;
    } else {
      return <div>the number: {num} larger then 100</div>;
    }
  }
  const ans = NumberRangeChecker(56);

  function fullName() {
    return firstname + " " + lastname;
  }
  const fn = fullName();

  function displayNums(num) {
    let elements = [];
    for (let i = 0; i < num; i++) {
      elements.push(<div>{i}</div>);
      //span - display inline - לא יורד שורה
      // div  display block יורד שורה is container
      //<p> display block  יורד שורה
    }
    return <div>{elements}</div>;
  }

  return (
    <div>
      <h1>Details</h1>
      <Nav/>
      {/* <p>My name is {firstname}</p>
            <p>My name is {lastname}</p> */}
      {fn}
      {displayNums(100)}
      {NumberRangeChecker(56)}
    </div>
  );
}

export default App;
