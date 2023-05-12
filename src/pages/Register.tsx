import '/Register.css';
import {useState} from "react";
const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');

    const submit = () =>{

    }

    return(
        <>
            <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={(e) => setFirstName(e.target.value)}/>
                            <label htmlFor="floatingInput">First name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Password"
                               onChange={(e) => setLastName(e.target.value)}/>
                            <label htmlFor="floatingPassword">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingPassword">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setPass1(e.target.value)}/>
                        <label htmlFor="floatingPassword">Pass 1</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setPass2(e.target.value)}/>
                        <label htmlFor="floatingPassword">Pass 2</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
            </form>
        </>
    )
}
export default Register;