import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { DefaultLayout } from "./layouts/defaultlayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router (){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/chekout" element={<CompleteOrderPage/>}/>
        <Route path="/OrderConfirmed" element={<OrderConfirmedPage/>}/>
      </Route>     
    </Routes>
  )
}