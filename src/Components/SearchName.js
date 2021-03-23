import React from 'react'

import { MDBFormInline, MDBIcon } from "mdbreact";
import '../styles/searchName.css'

function SearchName({setKeyword}) {
    
      return (

<div md="6" >
      <MDBFormInline className="md-form" style={{ justifyContent:'center'}}>
      <i class="fas fa-search fa-3x" style={{ color:'white'}}></i>
        <input style={{ fontSize:'large'}}className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setKeyword(e.target.value)} />
      </MDBFormInline>
    </div>
         
      )
}

export default SearchName
