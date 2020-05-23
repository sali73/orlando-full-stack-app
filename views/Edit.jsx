const React = require('react');
const Layout= require('./Layout.jsx');

class Edit extends React.Component {
    render() {
        const { tour} = this.props;
        return (
            <Layout>
                <h1>Edit tour page</h1>
                <form
                    action={`/tour/edit/${tour._id}?_method=put`}
                    method="POST">

                    Name: <input type="text" name="name" value={tour.name}/><br/>
                    Location: <input type="text" name="location" value={tour.location} /><br/>
                    Img : <input type="text" name="img"  value={tour.img}/><br/>
                    Rate : <input type="number" name="rate" value={tour.rate} /><br/>
                    Price : <input type="number" name="price" value={tour.price} /><br/>
                    Size: <input type="text" name="size" value={tour.size} /><br/>
                    {/* Details:<input type="text" name="textarea" /><br/> */}
                    
                    <input type="submit" name="" value="Edit tour" />
                </form>
            </Layout>
        );
    }
}

module.exports = Edit;
