import React from "react";
import '../brandname/brandname.css'


function BrandName () {

    const brandname = ['N','a','t','h','a','l','i','e',' ','S','t','o','r','e','y']

    const brandnameelements = brandname.map((letter) =>
    <span>{letter}</span>) 



    return(
        <div className="brand">
        {brandnameelements}
        </div>
    )

}

export default BrandName