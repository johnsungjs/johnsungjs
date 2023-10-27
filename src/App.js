import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebPortofolio from "./pages/WebPortofolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<WebPortofolio />}></Route>
          {/* <Route exact path='/' element={<Navigate to='/johnsungjs' />}></Route> */}
          {/* <Route exact path='/johnsungjs' element={<WebPortofolio />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
