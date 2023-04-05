import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='container'>
                <div className="box1">
                    <p>Your result</p>
                    <div className="circle">
                        76
                    </div>
                    <h3>Great</h3>
                    <p className='text'>
                        Lorem  <span>ipsum</span>   dolor sit amet, consectetur 
                        adipisicing elit. Quae aut nesciunt hic maiores consequatur 
                        distinctio repellat.
                    </p>
                </div>
                <div className="box2">
                    <div className="littleBox">
                       <h5>Reaction</h5> 
                       <h5>80/100</h5>
                    </div>
                    <div className="littleBox">
                       <h5>Reaction</h5> 
                       <h5>80/100</h5>
                    </div>
                    <div className="littleBox">
                       <h5>Reaction</h5> 
                       <h5>80/100</h5>
                    </div>
                    <div className="littleBox">
                       <h5>Reaction</h5> 
                       <h5>80/100</h5>
                    </div>
                    <div className="littleBox">
                       <h5>Reaction</h5> 
                       <h5>80/100</h5>
                    </div>
                </div>

            </div>
        )
    }
}
