import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className="container bg-light-blue dib ma2 pa3 br3 grow bw2 shadow-5 tc">
            <img alt="Tony Stark aka RDJ" src={`https://robohash.org/${id}?200x200`} />
            
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
