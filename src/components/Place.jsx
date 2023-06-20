import React from "react";
import locationIcon from "../assets/location-icon.png";

export default function Place(props) {
    return (
        <div className="place">
            <div className="place--image">
                <img src={`./images/${props.place.image}`} alt={props.place.imageAlt} />
            </div>
            <div className="place--info">
                <div className="place--location">
                    <img src={locationIcon} className="location--icon" alt="" />
                    <p>{props.place.location.toUpperCase()}</p>
                    <a href={props.place.googleMapLink} rel="noreferrer" target="_blank">View on Google Maps</a>
                </div>
                <div className="place--name">
                    <h2>{props.place.title}</h2>
                </div>
                <div className="place--date">
                    <p>{props.place.startDate} - {props.place.endDate}</p>
                </div>
                <div className="place--description">
                    <p>{props.place.description}</p>
                </div>
            </div>
        </div>
    );
}