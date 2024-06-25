import { ThemeProvider } from '@/components/theme-provider'
import { Header } from './components/global/header'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />
            </ThemeProvider>
        </>
    )
}

export default App
