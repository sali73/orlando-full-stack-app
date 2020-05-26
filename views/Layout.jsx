
const React = require('react')

const Layout = (props => {
   const logout = (
        <form action="/sessions/?_method=delete" method='post'>
            <input class="btn btn-secondary btn-sm" type="submit" value='Logout'/>
        </form>)
    return (
        <>
            <head>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&family=Raleway:ital,wght@1,500&display=swap" rel="stylesheet"></link>
            </head>

            <body className='container-fluid'>
              <div className='body'>
                <div class='grid'>

                  <nav class="navbar navbar-dark bg-dark">
                    <ul>
                      <li><a className="nav" href="/tour"><h1>Home</h1></a></li>
                      <li><a  className="nav" href="/tour/new"><h3>Create Sightsee </h3></a></li>
                      <li><a className="nav" href="/tour/gallery"><h3>Gallery</h3> </a></li>
                      <li><a className="nav" href="/tour/about"><h3>About</h3></a></li>
                    </ul> 
                    
                    <ul className='user'>
                      <li><a className="nav "  href="/user/new"><h3>Sing up</h3> </a></li>
                      
                      <li><a className="nav "  href="/sessions/new"><h3>{props.isLogIn? 'logout' : 'login'}</h3> </a></li>
                    </ul>  

                  </nav>
                  <header><img src="/img/2.jpg" alt=""/></header>                    
                  <main>
                    <div>{props.children}</div>
                  </main>
                  </div> 
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
                      <li><a className='link' href="#">youtube</a></li>
                    </ul>
                    
                  </div>
                  </footer>


                </div>

             
              {/* </div>  */}
            </body>
        </>
    )
})
module.exports = Layout