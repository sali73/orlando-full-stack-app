const React = require('react');
const Layout= require('./Layout.jsx');

class New extends React.Component {
  render() {
    return (
      <Layout>
        <div className="new">
          
            <form action="/tour" method="POST">
              <div className='form-group'> 
              <h1> Create A New Sightseeing!!</h1><br/>

                <label for="exampleFormControlInput1"> Name: </label>
                <input type="text" name="name" class="form-control form-control-lg" /><br/>

                <label for="exampleFormControlInput1">Location:</label>
                <input type="text" name="location" class="form-control form-control-lg" /><br/>

                <label for="exampleFormControlInput1"> Image : </label>
                <input type="text" name="img" class="form-control form-control-lg" /><br/>

                  <label for="exampleFormControlInput1">Rate :</label>
                  <input type="number" name="rate" class="form-control form-control-lg" /><br/>

                  <label for="exampleFormControlInput1"> Price :</label>
                  <input type="number" name="price" class="form-control form-control-lg" /><br/>

                  <label for="exampleFormControlInput1">Size: </label>
                  <input type="text" name="size"  class="form-control form-control-lg" /><br/><br/>
                  {/* Details:<input type="text" name="textarea" /><br/> */}
                  
                  <input type="submit" name="" class="btn btn-secondary btn-lg btn-block" value="Create Tour"/>
              </div>
            </form>
            </div>
      </Layout> );
  }
}

module.exports = New;