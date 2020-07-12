import Head from 'next/head';

const AuthLayout = ({ children }) => {
    return(
        <>
         <Head><style>{globalStyle}</style></Head>
            <div style={{ marginTop: 200 }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}>
                    <img src="/static/app_icon.png" height="100" />
                </div>
                {children}
            </div>
        </>
    );
}

const globalStyle = `
body {
    width: 100%;
    background-image: url("/static/main_background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}
`
export default AuthLayout;
    
