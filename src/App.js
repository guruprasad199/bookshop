import React from "react";
import Books from "./Books"

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
    <Books />
    </div>
  );
}

export default App;

// import React, {useState, useMemo} from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "./ContextLearn/Home";
// import About from "./ContextLearn/About";
// import { UserContext } from "./ContextLearn/UserContext";

// function App() {
//   const [value, setValue] = useState(null);

//   const providerValue = useMemo(() => ({value, setValue}), [value, setValue])

//   return (
//     <div className="App" style={{textAlign:"center"}}>
//     <Router>
//       <div>
//       <nav>
//         <ul>
//           <div>
//             <Link to="/">Home</Link>
//           </div>
//           <div>
//             <Link to="/about">About</Link>
//           </div>
//         </ul>
//         </nav>
//         <UserContext.Provider value={providerValue}>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         </UserContext.Provider>
//       </div>
//     </Router>
//     </div>
//   );
// }

// export default App;






