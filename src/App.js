import React ,{useState} from 'react'
import Navbar from './FBcomponent/Navbar'
import News from './FBcomponent/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'  // top horizontal scrolling

export default function App() {
  const pSize = 20;
  const [progress, setProgress] = useState(0);
  const [Country, setCountry] = useState("in");
  const [key, setKey] = useState(0);

  const updateProgress = (prog) => {
    setProgress(prog);
  }
  const changeCountry = (cont, k) => {
    setCountry(cont);
    setKey(k);
  }

  return (

    <Router>
      <LoadingBar
        color='red'
        height="5px"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar changeCountry={changeCountry} />

      {/* set each News component as a unique using key 
            because for mouting/rander updated component  .react only update unique key elem*/}
      <Routes>
        <Route exact path="/"
          element={<News key={`home${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"general"} />}
        />
        <Route exact path="/general"
          element={<News key={`general${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"general"} />}
        />
        <Route exact path="/business"
          element={<News key={`business${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"business"} />}
        />
        <Route exact path="/entertainment"
          element={<News key={`entertainment${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"entertainment"} />}
        />
        <Route exact path="/health"
          element={<News key={`health${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"health"} />}
        />
        <Route exact path="/science"
          element={<News key={`science${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"science"} />}
        />
        <Route exact path="/sports"
          element={<News key={`sports${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"sports"} />}
        />
        <Route exact path="/technology"
          element={<News key={`technology${key}`} updateProgress={updateProgress} pageSize={pSize} country={Country} category={"technology"} />}
        />

      </Routes>
    </Router>
  )

}
