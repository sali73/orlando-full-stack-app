
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
                      <li><a className="nav" href="/tour">Home</a></li>
                      <li><a  className="nav" href="/tour/new">Create</a></li>
                     
                    </ul>  
                  </nav>

                  <header><img src="/img/2.jpg" alt=""/></header>
                  <article></article>
                    
                  <main>
                    <div>{props.children}</div>
                  </main>

                  

                  <footer>
                  <img src="/img/log.jpeg" alt=""/>
                  <ul>
                    <li>About Us</li>
                    <li> FAQ</li>
                    <li> Privacy Policy</li>
                    <li>Terms of service</li>
                  </ul>
                  <div>
                    <ul>
                      <li><a  className='link' href="#">facebook</a></li>
                      <li><a className='link' href="#">twitter</a></li>
                      <li><a className='link' href="#">facebook</a></li>
                    </ul>
                    
                  </div>
                  </footer>


                </div>

             
              </div> 
            </body>
        </>
    )
})
module.exports = Layout