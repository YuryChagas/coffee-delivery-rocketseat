import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes"
import { CartContextProvider } from "./contexts/CartContext"

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
