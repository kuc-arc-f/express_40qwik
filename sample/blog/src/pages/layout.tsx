
//
import React from 'react';
let title = "Welcome";
//
export default function Page(props: any) {
    return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {(process.env.NODE_ENV === "develop") ? (
            <link href="/static/main.css" rel="stylesheet" /> 
        ): (
            <link href="/public/static/main.css" rel="stylesheet" /> 
        )} 
      </head>
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-gray-100 text-gray-900 text-center py-4 fixed top-0 left-0 right-0">
          <a href="/">[ Home ]</a>
        </header>          
        <div className="flex-grow mt-0">
          <div className ="bg-gray-200">{props.children}</div>
        </div>
        {/* footer */}
        <footer className="bg-gray-400 text-white py-4 text-center fixed bottom-0 w-full">
        Visit: https://github.com/kuc-arc-f/express_40qwik
      </footer>
      </body>
    </html>
    )
}
/*
*/
