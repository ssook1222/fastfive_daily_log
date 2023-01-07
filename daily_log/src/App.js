import { BrowserRouter, Route, Routes } from 'react-router-dom';
//routing pages
import Main from "./view/main/main"
import Total from "./view/total/total"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/total" element={<Total />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
