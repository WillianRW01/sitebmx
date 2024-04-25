import { Outlet } from "react-router-dom";
import '../App.css';
import Footer from "./Footer";
import Header from "./Header";

export default function Body() {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  );
}