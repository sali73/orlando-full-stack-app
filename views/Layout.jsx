const React = require('react')
const Layout = (props => {

   const logout = (
        <form action="/sessions/?_method=delete" method='post'>
            <input className="btn btn-secondary btn-sm" type="submit" value='Logout'/>
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
                <div className='grid'>
                  <nav className="navbar">
                    <ul>
                      <li><a className="nav" href="/tour"><h3>Home</h3></a></li>
                      <li><a className="nav" href="/tour/new"><h3>Create Sightseeing </h3></a></li>
                      <li><a className="nav" href="/tour/gallery"><h3>Gallery</h3> </a></li>
                      <li><a className="nav" href="/tour/about"><h3>About</h3></a></li>
                      <div className='user'>
                          <li><a className="nav "  href="/user/new"><h3>Sing up</h3> </a></li>
                          <li><a className="nav "  href="/sessions/new"><h3>{props.isLogIn? 'logout' : 'login'}</h3> </a></li>
                      </div>
                    </ul>
                  </nav>

                  <header></header>
                  <article> Welcome To Orlando Tour!</article>
                  <main>
                    <div className='data'>{props.children}</div>
                  </main>

                  </div> 
                  <footer className='navbar-dark bg-dark' >
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
            </body>
        </>
    )
})
module.exports = Layout