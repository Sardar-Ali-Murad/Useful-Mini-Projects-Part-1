import React from 'react'
import "./app.css"
const app = () => {
  return (
    <div className='SedoMain'>


       <div className='SedoImage'>
          <h1>This is the text</h1>
       </div>

        <p>Below are some of the use cases</p>

        <div className='quotes'>
           <p>This is quoted</p>
        </div>

        <div>
            <label className='label'>Name</label>
            <input placeholder='Name'/>
        </div>

        <div className='Lines'>
            <h3>This is the headings</h3>
        </div>

        {/* <h3>______xxxxxxx This is the hradings _______xxxxxxx</h3> */}

        <div className='ImageLines'>
            <h2>This is the headings</h2>
            <h2>This is the headings</h2>
            <h2>This is the headings</h2>
            <h2>This is the headings</h2>
            <h2>This is the headings</h2>
        </div>

        <ul style={{marginLeft:"30px"}}>
            <li>Item1</li>
            <li>Item1</li>
            <li>Item1</li>
            <li>Item1</li>
        </ul>

        <ol style={{marginLeft:"30px"}}>
            <li>Item1</li>
            <li>Item1</li>
            <li>Item1</li>
            <li>Item1</li>
        </ol>


       <div className='LinkContainer'>
           <ul>
             <li>Item1</li>
             <li>Item1</li>
             <li>Item1</li>
             <li>Item1</li>
             <li>Item1</li>
             <li>Item1</li>
             <li>Item1</li>
           </ul>
       </div>


       <div className='bigList'>
           <div>
              <h1>This is the headings</h1>
              <p>The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.</p>
           </div>
           <div>
              <h1>This is the headings</h1>
              <p>The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.</p>
           </div>
           <div>
              <h1>This is the headings</h1>
              <p>The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.</p>
           </div>
           <div>
              <h1>This is the headings</h1>
              <p>The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.</p>
           </div>
           <div>
              <h1>This is the headings</h1>
              <p>The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.</p>
           </div>
       </div>


       <div className='tooltip'>
         <a href='#'  data-tooltip="Youtube Link">This is the tooltipLink</a>
       </div>


    </div>
  )
}

export default app
