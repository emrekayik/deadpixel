import { ModeToggle } from '@/components/mode-toggle'

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <div className="mr-4">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <h1 className="select-none font-ng">deadpixel</h1>
                    </a>
                </div>
                <ModeToggle />
            </div>
        </nav>
    )
}
