import React from 'react';

const Rigister = () => {
    return (
        <div>
            <h4>please register</h4>
            <form>
<input type="email" name='email' id='email' placeholder='your email' /><br />
<input type="password" name='password' id='password' placeholder='your password' /><br />
<input type="submit" value='Register' />

            </form>
        </div>
    );
};

export default Rigister;