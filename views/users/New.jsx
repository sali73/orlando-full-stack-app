const React = require('react');
const Layout= require('../Layout.jsx');
class NewUser extends React.Component {
    render() {
        return (
            <Layout>
            <div className='login'>
                <img src="https://tse1.mm.bing.net/th?id=OIP.VAA4kQUPwUOtbkxvJJUbsQHaMF&pid=Api&P=0&w=300&h=300" alt=""/>

                <form className='login-form' action="/user/" method="POST">
                    <h1 className='login-h1'>New User</h1><br/>

                    <h4>User Name:</h4>
                    <input class="form-control form-control-lg" type="text" name="username" />
                    <br />
                    <h4>Password: </h4>
                    <input class="form-control form-control-lg" type="password" name="password" />
                    <br />
                    <input class="btn btn-secondary btn-lg btn-block"  type="submit" name="" value="Create User" />
                </form>
            </div>
            </Layout>
        );
    }
}
module.exports = NewUser;