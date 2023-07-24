This package is use to Improve the responsives for all pages in react sites.

You have to give the id to your root app.js parent div tag with id="l1"

and add the window.addEventlistener('resize',Responsive)

Expample:

Inside the App.js

const Responsive=require('resposive-desktopview')

useEffect(()=>{
    Responsive()
},[])

window.addEventlistener('resize',Responsive)

return(`<div className="App" id="l1"></div>`)