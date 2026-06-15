import Header from "./components/layout/Header"
import { ThemeProvider } from "./theme/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div>
        <Header></Header>
      </div>
    </ThemeProvider>
  )
}

export default App