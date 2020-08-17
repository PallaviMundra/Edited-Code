class BreakGame{
    constructor(){
        console.log("Heyyyyy")
    }

    display(){
        //this.button = createButton('Play');
        //this.button.position(displayWidth/2, displayHeight/2);

        this.link = createA('http://p5js.org/', 'this is a link');
        this.link.position(100, 400);
        
        
    }
}   

/*
<!-- <html>
    <head>
        <title>
            "This is the title"
        </title>
    </head>
    <body>
        <script>
            class BreakGame{
                constructor(){}

                display(){
                    this.button1 = createButton('Play');
                    this.button1.position(displayWidth/2, displayHeight/2);

                    this.button1.mousePressed(()=>{
                    console.log("inside script");
                    
                    });
                }
            }
            
        </script>
    </body>
</html> -->


<html>
            <title>
                "this is the title"
            </title>
            <body>
                <script>
                    <a href="http://www.google.com">Google</a>
                </script>
            </body>
            </html>


            <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
            <head>
            <meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
            <title>JavaScript String object - link() method example</title>
            </head>
            <body>
            <h1 style="color: red">JavaScript String object : link() method</h1>
            <hr />
            <script type="text/javascript">
            //This is done to make the following JavaScript code compatible to XHTML.
            var txt="Click to Open W3resource.com"
            document.write("<p>Link : " + txt.link("https://www.w3resource.com") + "</p>");
            </script>
            </body>
            </html>


            //<xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


            <html>
            //<head>
            //<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
            //<title>JavaScript String object - link() method example</title>
            //</head>
            //<body>
            <h1 style="color: red">JavaScript String object : link() method</h1>
            <hr />
            <script type="text/javascript">
            //This is done to make the following JavaScript code compatible to XHTML.
            var txt="Click to Open W3resource.com"
            document.write("<p>Link : " + txt.link("https://www.w3resource.com") + "</p>");
            </script>
            </body>
            </html>


            this.button.mousePressed(()=>{
            document.getElementsByName("button").onclick = function(){
                location.href = "https://www.google.com/";
            };

            
        })


        <button id="button">Alt+Shift+Click on me!</button>
        <script> 
            button.onclick = function(event){ 
                if(event.altKey && event.shiftKey){
                    alert('Hooray!')
                }
            };
        </script>
*/