import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Footer } from './components/global/footer'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className="antialiased">
                    <Navbar />
                    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md">
                        <div className="mx-auto flex max-w-2xl flex-col items-center p-4">
                            <motion.h1
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    ease: [0.17, 0.67, 0.83, 0.67],
                                }}
                                className="relative z-10 select-none bg-gradient-to-b from-primary to-accent bg-clip-text text-center font-ng text-lg font-bold text-transparent opacity-0 md:text-7xl"
                            >
                                deadpixel
                            </motion.h1>
                            <div className="text-md relative z-10 mx-auto my-2 max-w-lg text-center text-primary selection:bg-fuchsia-300 selection:text-fuchsia-900">
                                deadpixel is a handy tool for checking and
                                identifying{' '}
                                <motion.span
                                    initial={{
                                        backgroundSize: '0% 100%',
                                    }}
                                    animate={{
                                        backgroundSize: '100% 100%',
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: 'easeInOut',
                                        delay: 0,
                                        repeat: Infinity,
                                    }}
                                    style={{
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'left center',
                                        display: 'inline',
                                    }}
                                    className={
                                        'relative inline-block select-none rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500'
                                    }
                                >
                                    dead pixels
                                </motion.span>{' '}
                                on your screen.
                            </div>
                            <Button
                                className="relative z-10 mt-8 max-w-sm"
                                variant="shimmer"
                            >
                                start test
                            </Button>
                        </div>
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
