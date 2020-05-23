
const React = require('react')

const Layout = (props => {
    return (
        <>
            <head>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"/>
            </head>

            <body className='container-fluid'>
              <div>
                <div class='grid'>

                  <nav class="navbar navbar-dark bg-dark">
                    <ul>
                      <li><a href="/tour">Home</a></li>
                      <li><a href="/tour/new">Create</a></li>
                      <li></li>
                    </ul>  
                  </nav>

                  <header></header>
                  

                  <article> crona</article>
                    
                  <main>
                    <h1> welcome to orlando </h1>
                    <div>{props.children}</div>
                    
                    </main>

                  <aside>map</aside>

                  <footer>1</footer>

                </div>

             
              </div> 
            </body>
        </>
    )
})
module.exports = Layout