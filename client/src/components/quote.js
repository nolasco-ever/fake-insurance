import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { useDispatch } from 'react-redux';

//import actions
import { deleteQuote } from '../actions/posts';

function Quote({id, dot_number, nbr_of_pwr_units, val_of_pwr_units, premium_amount, premium_tax, premium_total, street, city, state, zipcode, driver1_name, driver1_age, driver2_name, driver2_age, driver3_name, driver3_age, driver4_name, driver4_age, driver5_name, driver5_age, doAnimate}) {
    const [toggleEdit, setToggleEdit] = useState(false);
    const dispatch = useDispatch();

    function toggleEditor(){
        console.log("TOGGLED");
        if(toggleEdit === true){
            setToggleEdit(false);
        }
        else if(toggleEdit === false){
            setToggleEdit(true);
        }
    }

    //useSpring animations
    const openEditor = useSpring({
        height: "85vh",

        from: {
            height: "10vh"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const closeEditor = useSpring({
        height: "10vh",

        from: {
            height: "85vh"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const displayForm = useSpring({
        opacity: 1,

        from: {
            opacity: 0
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },
        reset: true
    })

    const hideForm = useSpring({
        opacity: 0,

        from: {
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
                return openEditor;
            }
        }
        else if (num === 2){
            if(doAnimate === true){
                return closeEditor;
            }
        }
        else if (num === 3){
            if(doAnimate === true){
                return displayForm;
            }
        }
        else if (num === 4){
            if(doAnimate === true){
                return hideForm;
            }
        }
    }

    return(
        <animated.div style={toggleEdit ? animationFunction(1) : animationFunction(2)} className="quote-list-container">
            <div className="mini-display">
                <div className="title-subtitle">
                    <h2>{driver1_name}</h2>
                    <p>{"$"+premium_total}</p>
                </div>

                <div className="quote-list-form">
                    <button onClick = {toggleEditor} className="edit-button">{toggleEdit ? "Close" : "View"}</button>
                    <button className="delete-button" onClick={() => dispatch(deleteQuote(id))}>Delete</button>
                </div>
            </div>

            <animated.form className="info" style={toggleEdit? animationFunction(3) : animationFunction(4)}>
                <h3>Truck Info</h3>
                <div className="truck-info">
                    <div className="input-box">
                        <p>Dot Number</p>
                        <p className="info-display-text">{dot_number}</p>
                    </div>

                    <div className="input-box">
                        <p>Premium Amount</p>
                        <p className="info-display-text">{premium_amount}</p>
                    </div>

                    <div className="input-box">
                        <p># of Power Units</p>
                        <p className="info-display-text">{nbr_of_pwr_units}</p>
                    </div>

                    <div className="input-box">
                        <p>Premium Tax</p>
                        <p className="info-display-text">{premium_tax}</p>
                    </div>

                    <div className="input-box">
                        <p>Value of Power Units</p>
                        <p className="info-display-text">{val_of_pwr_units}</p>
                    </div>

                    <div className="input-box">
                        <p>Premium Total</p>
                        <p className="info-display-text">{premium_total}</p>
                    </div>
                </div>

                <h3 style={{marginTop: "25px"}}>Address</h3>
                <div id="address-info" className="driver-info">
                    <div className="input-box">
                        <p>Street</p>
                        <p className="info-display-text" style={{width: "45vh"}}>{street}</p>
                    </div>

                    <div className="input-box">
                        <p>City</p>
                        <p className="info-display-text" style={{width: "20vh"}}>{city}</p>
                    </div>

                    <div className="input-box">
                        <p>State</p>
                        <p className="info-display-text">{state}</p>
                    </div>

                    <div className="input-box">
                        <p>Zip Code</p>
                        <p className="info-display-text">{zipcode}</p>
                    </div>
                </div>

                <h3 style={{marginTop: "25px"}}>Driver Info</h3>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <p className="info-display-text" style={{width: "30vh"}}>{driver1_name}</p>
                    </div>

                    <div className="input-box">
                        <p style={{width: "5vh", textAlign: "center"}}>Age</p>
                        <p className="info-display-text" style={{width: "5vh", textAlign: "center"}}>{driver1_age}</p>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <p className="info-display-text" style={{width: "30vh"}}>{driver2_name}</p>
                    </div>

                    <div className="input-box">
                        <p style={{width: "5vh", textAlign: "center"}}>Age</p>
                        <p className="info-display-text" style={{width: "5vh", textAlign: "center"}}>{driver2_age}</p>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <p className="info-display-text" style={{width: "30vh"}}>{driver3_name}</p>
                    </div>

                    <div className="input-box">
                        <p style={{width: "5vh", textAlign: "center"}}>Age</p>
                        <p className="info-display-text" style={{width: "5vh", textAlign: "center"}}>{driver3_age}</p>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <p className="info-display-text" style={{width: "30vh"}}>{driver4_name}</p>
                    </div>

                    <div className="input-box">
                        <p style={{width: "5vh", textAlign: "center"}}>Age</p>
                        <p className="info-display-text" style={{width: "5vh", textAlign: "center"}}>{driver4_age}</p>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <p className="info-display-text" style={{width: "30vh"}}>{driver5_name}</p>
                    </div>

                    <div className="input-box">
                        <p style={{width: "5vh", textAlign: "center"}}>Age</p>
                        <p className="info-display-text" style={{width: "5vh", textAlign: "center"}}>{driver5_age}</p>
                    </div>
                </div>
            </animated.form>
        </animated.div>
    );
}

export default Quote;