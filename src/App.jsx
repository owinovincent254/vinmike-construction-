import StateProvider from "./context/state"
import Router from "./components/Router"
import React from "react"
function App(){

  return(
    <StateProvider>
      <Router/>
      </StateProvider>
    
  )
}
export default  App
