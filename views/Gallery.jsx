const React = require('react');
const Layout= require('./Layout.jsx');

class Gallery extends React.Component {
render() {
    return (
      <Layout>
        <div className="new">

            <form action="/tour" method="POST">
              <div className='form-group'>
              <h1 className='title'> Create A New Sightseeing!!</h1><br/>

                <label for="exampleFormControlInput1"> Name: </label>
                <input type="text" name="name" className="form-control form-control-lg" /><br/>

                  <label for="exampleFormControlInput1">Size: </label>
                  <input type="text" name="size"  className="form-control form-control-lg" /><br/><br/>
                  {/* Details:<input type="text" name="textarea" /><br/> */}

                  <input type="submit" name="" className="btn btn-secondary btn-lg btn-block" value="Create Tour"/>
              </div>
            </form>
            </div>
      </Layout> );
  }
}


module.exports = Gallery;

