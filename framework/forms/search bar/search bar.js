function entersearch() {
    let search = document.getElementById("search").value 
    switch(search){
    case "lorem": {
            document.getElementById("body").innerHTML = ""
            document.write(` <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="search bar.css">
            </head>
            <body id="body">
                <form>
            <input  placeholder="Enter Search" name="search" id="search" list="searchdatalist">
            <datalist id="searchdatalist">
                <option value="lorem">
                <option value="lorem2">
                
            </datalist>

            
            <button type="button" onclick="entersearch()" id="searchbutton">Enter Search</button>
        </form>
                    
                    <a href="search bar.js">link1</a>
                
                <script src="search bar.js">

                </script>
                

            </body>
            </html>`)
        

        document.getElementById("body").style.textAlign = "center"
        break
        
    }

   case "lorem2": {
            document.getElementById("body").innerHTML = ""
            document.write(` <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="search bar.css">
            </head>
            <body id="body">
            <form>
            <input  placeholder="Enter Search" name="search" id="search" list="searchdatalist">
            <datalist id="searchdatalist">
                <option value="lorem">
                <option value="lorem2">
                
            </datalist>

            
            <button type="button" onclick="entersearch()" id="searchbutton">Enter Search</button>
        </form>
                    <a href="search bar.js">link2</a>
                <script src="search bar.js">

                </script>

            </body>
            </html>`)


        document.getElementById("body").style.textAlign = "center"
        break

    }

    default: {
        alert("There are no search results to be found with your search")
        break
    }

}

}

