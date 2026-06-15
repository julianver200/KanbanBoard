import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import { ThemeProvider } from "./theme/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div>
        <Header/>
        <Main/>
      </div>
    </ThemeProvider>
  )
}

export default App