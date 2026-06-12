import { Header } from "../Header"
import { Footer } from "../Footer"
import { Children } from "react"


function Layout() {
    return (
        <>
            <Header />
            {Children}
            <Footer />
        </>
    )
}

export { Layout }