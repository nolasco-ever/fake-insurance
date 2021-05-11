import React, { useState } from "react";
import {useSpring, animated} from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//import components
import Quote from "./quote";
import QuoteForm from "./quoteForm";
import desktopLogo from "../images/logo-2.png";
import mobileLogo from "../images/logo-1.png";

function QuotesPage(){
    const dispatch = useDispatch();
    const history = useHistory();

    //get current user data
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    console.log("USER ID: ", user.result._id);

    //fetch quotes from database
    const posts = useSelector((state) => state.posts);
    console.log("THESE QUOTES: ", posts);

    //state to toggle the form on and off, and to input information to the form
    const [toggleAdd, setToggleAdd] = useState(false);
    const [doAnimate, setDoAnimate] = useState(false);

    //initialize postForm
    const [postForm, setPostForm] = useState({
        userID: user.result._id,
        dot_number: "",
        nbr_of_pwr_units: "",
        val_of_pwr_units: "",
        premium_amount: "",
        premium_tax: "",
        premium_total: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        driver1_name: "",
        driver1_age: "",
        driver2_name: "",
        driver2_age: "",
        driver3_name: "",
        driver3_age: "",
        driver4_name: "",
        driver4_age: "",
        driver5_name: "",
        driver5_age: ""
    });

    //log user out and redirect to homepage
    function logOut(){
        dispatch({type: 'LOGOUT'});
        history.push('/');
        setUser("");
        setPostForm("");
    }

    function toggleAddForm(){
        if(toggleAdd){
            setToggleAdd(false);
        }
        else{
            setToggleAdd(true);
        }

        setDoAnimate(true);
    }

    //Animation to open and close the 'Add a Quote' form
    const openAddForm = useSpring({
        height: "85vh",
        opacity: 1,

        from: {
            height: "0vh",
            opacity: 0
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const closeAddForm = useSpring({
        height: "0vh",
        opacity: 0,

        from: {
            height: "85vh",
            opacity: 1
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
              return openAddForm;
            }
          }
          else if (num === 2){
            if(doAnimate === true){
              return closeAddForm;
            }
          }
    }

    return(
        <div>
            <img id="desktop-logo" src={desktopLogo}></img>
            <div className="mobile-logo-container"><img id="mobile-logo" src={mobileLogo}></img></div>
            <header>
                <form className="log-out-form">
                    <button onClick={logOut}>Log Out</button>
                </form>

                <div className="title-line">
                    <div className="title-subtitle">
                        <h1>{user.result.name+"'s Quotes"}</h1>
                        <p>{" - "+user.result.company_name}</p>
                    </div>
                    <button onClick={toggleAddForm} style={toggleAdd ? {backgroundColor: "#E84855"} : null}>{toggleAdd ? "Discard" : "Add a Quote"}</button>
                </div>
            </header>

            <animated.form style={toggleAdd ? animationFunction(1) : animationFunction(2)} className="add-quote-form">
                <QuoteForm
                    postForm={postForm}
                    setPostForm={setPostForm}
                    doAnimate={doAnimate}
                    setDoAnimate={setDoAnimate}
                    setToggleAdd={setToggleAdd}
                />
            </animated.form>

            {/* Display all posts */}
            {posts.map((item, index) => {
                if(posts[index].userID === user.result._id){
                    return <Quote
                        key={index}
                        id={posts[index]._id}
                        dot_number={posts[index].dot_number}
                        nbr_of_pwr_units={posts[index].nbr_of_pwr_units}
                        val_of_pwr_units={posts[index].val_of_pwr_units}
                        premium_amount={posts[index].premium_amount}
                        premium_tax={posts[index].premium_tax}
                        premium_total={posts[index].premium_total}
                        street={posts[index].street}
                        city={posts[index].city}
                        state={posts[index].state}
                        zipcode={posts[index].zipcode}
                        driver1_name={posts[index].driver1_name}
                        driver1_age={posts[index].driver1_age}
                        driver2_name={posts[index].driver2_name}
                        driver2_age={posts[index].driver2_age}
                        driver3_name={posts[index].driver3_name}
                        driver3_age={posts[index].driver3_age}
                        driver4_name={posts[index].driver4_name}
                        driver4_age={posts[index].driver4_age}
                        driver5_name={posts[index].driver5_name}
                        driver5_age={posts[index].driver5_age}
                        created_at={posts[index].created_at}
                        doAnimate={doAnimate}
                    />
                }
            })}

            
        </div>
    );
}

export default QuotesPage;