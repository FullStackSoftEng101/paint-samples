// import { usePage } from "./layout/PageContext";

import Home from "./Home";
import Colors from "./colors/Colors";
import Wallpaper from "./colors/Wallpaper";
import Error404 from "./Error404";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";

export default function App() {
  // // const { page } = usePage();
  // if (page === "home") return <Home />;
  // if (page === "colors") return <Colors />;
  // if (page.startsWith("colors/")) return <Wallpaper />;

  // return <Error404 />;
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="colors" element={<Colors />} />
        <Route path="colors/:color" element={<Wallpaper />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
