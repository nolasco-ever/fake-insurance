import React from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts';

function QuoteForm({postForm, setPostForm, doAnimate, setDoAnimate, setToggleAdd}){
    const dispatch = useDispatch();

    //change the value of the postForm state and the input text box
    function inputTextHandler(e){
        if(doAnimate === true){
            setDoAnimate(false);
        }
        
        setPostForm((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }

    //post info to database and close the form
    function postInfo(e){
        e.preventDefault();
        dispatch(createPost(postForm));

        setDoAnimate(true);
        setToggleAdd(false);
    }

    return(
        <div>
            <h3>Truck Info</h3>
                <div className="truck-info">
                    <div className="input-box">
                        <p>Dot Number</p>
                        <input type="text" name="dot_number" value={postForm.dot_number} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Premium Amount</p>
                        <input type="text" name="premium_amount" value={postForm.premium_amount} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p># of Power Units</p>
                        <input type="text" name="nbr_of_pwr_units" value={postForm.nbr_of_pwr_units} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Premium Tax</p>
                        <input type="text" name="premium_tax" value={postForm.premium_tax} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Value of Power Units</p>
                        <input type="text" name="val_of_pwr_units" value={postForm.val_of_pwr_units} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Premium Total</p>
                        <input type="text" name="premium_total" value={postForm.premium_total} onChange={inputTextHandler}/>
                    </div>
                </div>

                <h3 style={{marginTop: "25px"}}>Address</h3>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Street</p>
                        <input className="address-input" type="text" name="street" value={postForm.street} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>City</p>
                        <input type="text" style={{width: "200px"}} name="city" value={postForm.city} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>State</p>
                        <input type="text" style={{width: "100px"}} name="state" value={postForm.state} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Zip Code</p>
                        <input type="text" style={{width: "100px"}} name="zipcode" value={postForm.zipcode} onChange={inputTextHandler}/>
                    </div>
                </div>

                <h3 style={{marginTop: "25px"}}>Driver Info</h3>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <input type="text" style={{width: "200px"}} name="driver1_name" value={postForm.driver1_name} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Age</p>
                        <input type="text" style={{width: "100px"}} name="driver1_age" value={postForm.driver1_age} onChange={inputTextHandler}/>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <input type="text" style={{width: "200px"}} name="driver2_name" value={postForm.driver2_name} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Age</p>
                        <input type="text" style={{width: "100px"}} name="driver2_age" value={postForm.driver2_age} onChange={inputTextHandler}/>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <input type="text" style={{width: "200px"}} name="driver3_name" value={postForm.driver3_name} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Age</p>
                        <input type="text" style={{width: "100px"}} name="driver3_age" value={postForm.driver3_age} onChange={inputTextHandler}/>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <input type="text" style={{width: "200px"}} name="driver4_name" value={postForm.driver4_name} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Age</p>
                        <input type="text" style={{width: "100px"}} name="driver4_age" value={postForm.driver4_age} onChange={inputTextHandler}/>
                    </div>
                </div>
                <div className="driver-info">
                    <div className="input-box">
                        <p>Name</p>
                        <input type="text" style={{width: "200px"}} name="driver5_name" value={postForm.driver5_name} onChange={inputTextHandler}/>
                    </div>

                    <div className="input-box">
                        <p>Age</p>
                        <input type="text" style={{width: "100px"}} name="driver5_age" value={postForm.driver5_age} onChange={inputTextHandler}/>
                    </div>
                </div>
                
                <input className="updateInfo" type="submit" value="Add Quote" onClick={postInfo}/>
        </div>
    );
}

export default QuoteForm;