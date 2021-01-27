import React from "react";
import Heading from "./Heading";
import Note from "./Note";
import Notes from "./notes";
import Footer from "./Footer";


function App(){
    return (
        <div>
            <Heading />
            {Notes.map(entry => 
                <Note   
                    key = {entry.key}     
                    title = {entry.title}
                    content = {entry.content}
                />
                )}
            <Footer />
        </div>
    )
}
export default App;



