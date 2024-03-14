import React from "react";

function ImgArray() {

    let imageArray = ["Image1.jpg", "Image2.jfif", "Image3.jpg", "Image4.jfif", "Image5.jfif"];
    let res = imageArray.map(item =>
        <td><img height='50px' width='50px' src={"./Images/" + item}></img></td>
    );

    return(
        <>
          
            <hr></hr>
            <table>
                <tr>
                    {res}
                </tr>
            </table>
        
        </>
    );

}

export default ImgArray;