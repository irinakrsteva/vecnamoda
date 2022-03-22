import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import ColorContext from "../../context/CartContext";

function Intro({testVar}) {

    const [updatableTestVar, setUTestVar] = useState(testVar);

    return (
        <Container className="mt-3">
            Hello and welcome. This is the Intro {testVar}, {updatableTestVar}
            <div>
                <Button onClick={() => {setUTestVar(updatableTestVar + "AA - ")}} >Test</Button>
            </div>
            <ColorContext.Provider value={{color: 'blue'}}>
            <ColorContext.Consumer>
                {({color}) => (
                    <div>{color}</div>
                )}
            </ColorContext.Consumer>
            </ColorContext.Provider>
        </Container>
    );

}

export default Intro;