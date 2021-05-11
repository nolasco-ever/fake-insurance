import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSpring, animated } from "react-spring";
import { signin, signup } from '../actions/auth';
import { useHistory } from 'react-router-dom';

//import components
import ErrorMessage from "./errorMessage";
import logo from "../images/logo-1.png";

function LoginPage({createTheUser, setCreateTheUser, user, setUser}){
    const dispatch = useDispatch();
    const history = useHistory();

    //initialize state variables to show error messages and toggle between forms
    const [formExpand, setFormExpand] = useState(false);
    const [doAnimate, setDoAnimate] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        message: "",
        show: false
    })

    //update the createUser and user state
    function inputTextHandler(e){
        //prevent animation from repeating
        var form = document.getElementById("form");
        var signUpForm = document.getElementById("sign-up-form");
        var logInForm = document.getElementById("log-in-form");

        if(doAnimate === true){
            setDoAnimate(false);
        }

        form.style.height = "65vh";
        signUpForm.style.opacity= "1";
        signUpForm.style.zIndex= "10";
        logInForm.style.opacity= "0";
        logInForm.style.zIndex= "1";



        setCreateTheUser((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }

    function inputUserHandler(e){
        //prevent animation from repeating
        var form = document.getElementById("form");
        var signUpForm = document.getElementById("sign-up-form");
        var logInForm = document.getElementById("log-in-form");

        if(doAnimate === true){
            setDoAnimate(false);
        }

        form.style.height = "25vh";
        signUpForm.style.opacity= "0";
        signUpForm.style.zIndex= "1";
        logInForm.style.opacity= "1";
        logInForm.style.zIndex= "10";
        
        setUser((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }

    //sign the user in
    function logInUser(e){
        e.preventDefault();
        
        //Check for blank input texts
        var inputs = document.getElementById("log-in-form").children;
        var counter = 0;

        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value === ""){
                counter++;
            }
        }

        if(counter > 0){
            //display error message
            setErrorMessage({
                message: "Fill in the blank spaces!",
                show: true
            })
        }
        else{
            //sign in
            dispatch(signin(user));
            history.push('/quotes');
        }
    }

    //Create the user
    function userCreate(e){
        e.preventDefault();

        var confirmPassword = document.getElementById("confirmPassword");
        var inputs = document.getElementById("sign-up-form").children;
        var counter = 0;

        //Check for blank input texts
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value === ""){
                counter++;
            }
        }

        if(counter > 0){
            //display error message
            setErrorMessage({
                message: "Fill in the blank spaces!",
                show: true
            })
        }
        else if(confirmPassword.value !== createTheUser.password){
            //display error message
            setErrorMessage({
                message: "Passwords do not match!",
                show: true
            })
        }
        else{
            //create user
            dispatch(signup(createTheUser));
            setDoAnimate(true);
            setFormExpand(false);
        }
    }

    //toggle the form animation
    function toggleForm(){
        if(formExpand){
            setFormExpand(false);
        }
        else{
            setFormExpand(true);
        }

        setDoAnimate(true);
    }

    //Animate form box
    const expandForm = useSpring({
        height: "65vh",

        from: {
            height: "25vh"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const reduceForm = useSpring({
        height: "25vh",

        from: {
            height: "65vh"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const fadeInForm = useSpring({
        opacity: 1,
        zIndex: "10",

        from: {
            opacity: 0,
            zIndex: "1"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const fadeOutForm = useSpring({
        opacity: 0,
        zIndex: "1",

        from: {
            opacity: 1,
            zIndex: "10"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    function animationFunction(num){
        if(num === 1){
            if(doAnimate === true){
                return expandForm;
            }
        }
        else if (num === 2){
            if(doAnimate === true){
                return reduceForm;
            }
        }
        else if (num === 3){
            if(doAnimate === true){
                return fadeInForm;
            }
        }
        else if (num === 4){
            if(doAnimate === true){
                return fadeOutForm;
            }
        }
    }

    return(
        <div className="login-page">
            <img src={logo}></img>

            <ErrorMessage
                errorMessage={errorMessage}
            />

            <animated.div id="form" className="form" style={formExpand ? animationFunction(1) : animationFunction(2)}>
                <h3>{formExpand ? "Create Account" : "Log In"}</h3>

                <animated.form id="log-in-form" style={formExpand ? animationFunction(4) : animationFunction(3)} onSubmit={logInUser}>
                    <input type="text" placeholder="Email" name="email" value={user.email} onChange={inputUserHandler}/>
                    <input type="password" placeholder="Password" name="password" value={user.password} onChange={inputUserHandler}/>
                    <input className="primary-button" type="submit" value="Log In"/>
                </animated.form>

                <animated.form id="sign-up-form" style={formExpand ? animationFunction(3) : animationFunction(4)} onSubmit={userCreate}>
                    <input type="text" placeholder="Full Name" name="name" value={createTheUser.name} onChange={inputTextHandler}/>
                    <input type="text" placeholder="Email" name="email" value={createTheUser.email} onChange={inputTextHandler}/>
                    <input type="text" placeholder="Company Name" name="company_name" value={createTheUser.company_name} onChange={inputTextHandler}/>
                    <input type="text" placeholder="Street" name="company_street" value={createTheUser.company_street} onChange={inputTextHandler}/>
                    <input type="text" placeholder="City" name="company_city" value={createTheUser.company_city} onChange={inputTextHandler}/>
                    <input type="text" placeholder="Zip Code" name="company_zipcode" value={createTheUser.company_zipcode} onChange={inputTextHandler}/>
                    <input type="password" placeholder="Create password" name="password" value={createTheUser.password} onChange={inputTextHandler}/>
                    <input type="password" placeholder="Confirm password" id="confirmPassword"/>
                    <input className="primary-button" type="submit" value="Sign Up"/>
                </animated.form>
            </animated.div>

            <button to="/create_account" className="secondary-button" onClick={toggleForm}>{formExpand ? "Log In" : "Sign Up"}</button>
        </div>
    );
}

export default LoginPage;