import { BrowserRouter, Route, Routes } from 'react-router-dom';

//routing pages
import Main from "./view/start/start"
import Top from "./view/main/main"
import Total from "./view/total/total"
import Detail from "./view/detail/detail"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/top" element={<Top />}></Route>
            <Route exact path="/total" element={<Total />}></Route>
            <Route exact path="/detail" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
