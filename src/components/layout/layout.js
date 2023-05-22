const Layout = ({children}) => {
    return (
        <>
            <header>
                <p>HEADER</p>
            </header>

            <main>
                {children}
            </main>

            <footer>FOOTER</footer>
        </>
    );
}

export default Layout