import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import { ThemeProvider } from "./theme/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App