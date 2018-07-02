import React from "react";
import ReactDOM from "react-dom";

const Text = (props) => {
    return (
        <i className={props.content} style={ {transform: "rotate(" + "-" + props.deg + "deg)"}}></i>
    )
}

const Circle  = (props) => {
    return (
        <div className="wrp" style={ {transform: "rotate(" + props.deg + "deg)"} }>
            <div className="circle" style={ {background: props.color} } > 
                <Text content={props.content} deg={props.deg} />
            </div>
        </div>
    );
};

const Center = () => {
    return (
        <div className="center">
            <Circle deg="45" color="red" content="fab fa-facebook-f"/>
            <Circle deg="90" color="orange" content="fab fa-twitter"/>
            <Circle deg="135" color="green" content="fas fa-rss"/>
            <Circle deg="180" color="lightgreen" content="fab fa-google-plus-g"/>
            <Circle deg="225" color="lightblue" content="fab fa-linkedin-in"/>
            <Circle deg="270" color="blue" content="fab fa-skype" />
            <Circle deg="315" color="purple" content="fab fa-vimeo-v"/>
            <Circle deg="360" color="pink" content="fab fa-tumblr"/>
        </div>
    );
}

ReactDOM.render(
    <Center />,
    document.getElementById("root"),
);


