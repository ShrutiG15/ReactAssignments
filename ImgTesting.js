function ImgTesting() {

    let file1 = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg";
    let file2 = "Image1.jpg";

    return (
        <>
            <h3>Working with Images React JS</h3>
            <hr />

            <img width="100" src="https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg" />
            <br />
            <img width="100" src={file1} />
            <hr />

            <img width="100" src="./Images/Image1.jpg" />
            <img width="100" src="./Images/Image1.jpg" />
            <hr />

            <img width="100" src={"./Images/" + file2} />
            <hr />
        </>

    );
}

export default ImgTesting;