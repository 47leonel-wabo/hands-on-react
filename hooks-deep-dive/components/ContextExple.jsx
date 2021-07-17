import React from 'react';

const themeStyles = {
    light: {
        background: "#fff",
        color: "#333"
    },
    dark: {
        background: "#0d1117",
        color: "#cfc8d7"
    }
}

const layout = {
    left: "row",
    right: "row-reverse"
}

// Context creation
const ThemeContext = React.createContext({...themeStyles.light, direction: layout.left})

// The consumer component
const Layout = () => {

    // Get context
    const theme = React.useContext(ThemeContext)

    return <>
    {/* Then, context properties are used to style this component */}
        <section 
            className="section"
            style={{
                display: 'flex',
                color: theme.color,
                backgroundColor: theme.background,
                flexDirection: theme.direction
            }}
        >
            <div className="sidebar" style={{
                        width: '25%', 
                        margin: '0 1.5rem', 
                        display: 'block', 
                        padding: '2rem',
                        borderRadius: '5px',
                    }}>
                <nav>
                    <a href="#l">Home</a>
                    <a href="#l">Articles</a>
                    <a href="#l">About</a>
                </nav>
            </div>
            <article>
                <h1 className="is-size-3">Welcome to my fantastic blog</h1>
                <p style={{margin: '0.5rem 0'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, similique fugiat!
                    Consequuntur earum eos, ipsam veritatis ratione officia maxime illo. Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Deserunt sapiente optio voluptatem nulla similique
                    quod esse maiores voluptate consequuntur vel!
                </p>
                <p style={{margin: '0.5rem 0'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente numquam repudiandae 
                    suscipit labore facere pariatur vitae perspiciatis dolores possimus ipsam eius vel quasi,
                    eveniet a sunt aut porro repellat rerum est amet. Provident ipsam error rerum et excepturi,
                    quia dolorum autem reiciendis odit, nobis sit labore nisi non quidem eaque?
                </p>
                <p style={{margin: '0.5rem 0'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente numquam repudiandae 
                    suscipit labore facere pariatur vitae perspiciatis dolores possimus ipsam eius vel quasi,
                    eveniet a sunt aut porro repellat rerum est amet. Provident ipsam error rerum et excepturi,
                    quia dolorum autem reiciendis odit, nobis sit labore nisi non quidem eaque?
                </p>
                <p style={{margin: '0.5rem 0'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente numquam repudiandae 
                    suscipit labore facere pariatur vitae perspiciatis dolores possimus ipsam eius vel quasi,
                    eveniet a sunt aut porro repellat rerum est amet. Provident ipsam error rerum et excepturi,
                    quia dolorum autem reiciendis odit, nobis sit labore nisi non quidem eaque?
                </p>
            </article>
        </section>
    </>
}
// by changing themeStyle from 'light' to 'dark' or vice versa, change this component
// look and feel
export default () => (
    <ThemeContext.Provider value={{...themeStyles.light, direction: layout.right}}>
        <Layout />
    </ThemeContext.Provider>)