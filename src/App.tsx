import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/global/footer'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTransition, animated } from '@react-spring/web'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components/ui/dialog'

interface Test {
    color: string
    // Diğer test parametrelerini ekleyebilirsiniz (desen, süre, vb.)
}

function App() {
    const [isTesting, setIsTesting] = useState(false) // Test durumunu izlemek için
    const [currentTest, setCurrentTest] = useState<number>(0)
    const componentRef = useRef<HTMLDivElement>(null)

    const tests: Test[] = [
        { color: 'red' },
        { color: 'green' },
        { color: 'blue' },
    ]

    const startTest = () => {
        setIsTesting(true) // Test modunu aç
        toggleFullscreen() // Tam ekrana geç
    }

    const nextTest = () => {
        setCurrentTest((currentTest + 1) % tests.length)
    }

    const prevTest = () => {
        setCurrentTest((currentTest - 1 + tests.length) % tests.length)
    }

    const toggleFullscreen = () => {
        if (componentRef.current) {
            if (!document.fullscreenElement) {
                componentRef.current.requestFullscreen()
            } else {
                document.exitFullscreen()
                setIsTesting(false) // Tam ekrandan çıkınca test modunu kapat
            }
        }
    }
    const [isOpen, setIsOpen] = useState(false)

    const handleDialogChange = (isOpen: boolean) => setIsOpen(isOpen)

    const transition = useTransition(isOpen, {
        from: {
            scale: 0,
            opacity: 0,
        },
        enter: {
            scale: 1,
            opacity: 1,
        },
        leave: {
            scale: 0,
            opacity: 0,
        },
    })

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
                            <Dialog
                                open={isOpen}
                                onOpenChange={handleDialogChange}
                            >
                                <DialogTrigger asChild>
                                    <Button
                                        className="relative z-10 mt-8 max-w-sm"
                                        variant="shimmer"
                                        onClick={toggleFullscreen}
                                    >
                                        start test
                                    </Button>
                                </DialogTrigger>
                                {transition((style, isOpen) => (
                                    <>
                                        {isOpen ? (
                                            <div className="pointer-events-auto fixed inset-0 h-screen w-full bg-red-500"></div>
                                        ) : null}
                                        {isOpen ? (
                                            <DialogContent className="flex h-screen w-screen">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Edit profile
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        Make changes to your
                                                        profile here. Click save
                                                        when you're done.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                sa
                                                <DialogFooter>
                                                    <Button type="submit">
                                                        Save changes
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        ) : null}
                                    </>
                                ))}
                            </Dialog>
                            <div ref={componentRef}>
                                {!isTesting && (
                                    <button onClick={startTest}>
                                        Testi Başlat
                                    </button>
                                )}
                                <AnimatePresence>
                                    {isTesting && ( // Test modunda ise göster
                                        <motion.div
                                            key={currentTest}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                position: 'fixed',
                                                top: 0,
                                                left: 0,
                                                width: '100vw',
                                                height: '100vh',
                                                backgroundColor:
                                                    tests[currentTest].color,
                                            }}
                                            className=""
                                        >
                                            <button onClick={prevTest}>
                                                Geri
                                            </button>
                                            <button onClick={nextTest}>
                                                İleri
                                            </button>
                                            <button onClick={toggleFullscreen}>
                                                Çıkış
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
