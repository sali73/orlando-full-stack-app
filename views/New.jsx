const React = require('react');
const Layout= require('./Layout.jsx');

class New extends React.Component {
  render() {
    return (
      <Layout>
            <h1>New tour page</h1>
            <form action="/tour" method="POST">
                Name: <input type="text" name="name" /><br/>
                Location: <input type="text" name="location" /><br/>
                Img : <input type="text" name="img" /><br/>
                Rate : <input type="number" name="rate" /><br/>
                Price : <input type="number" name="price" /><br/>
                Size: <input type="text" name="size" /><br/>
                {/* Details:<input type="text" name="textarea" /><br/> */}
                
                <input type="submit" name="" value="Create Tour"/>
             </form>
      </Layout>);
  }
}

module.exports = New;