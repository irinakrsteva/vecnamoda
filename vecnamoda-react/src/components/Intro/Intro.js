import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";

function Intro({testVar}) {

    const [updatableTestVar, setUTestVar] = useState(testVar);

    return (
        <Container className="mt-3">
            Hello and welcome. This is the Intro {testVar}, {updatableTestVar}
            <div>
                <Button onClick={() => {setUTestVar(updatableTestVar + "AA - ")}} >Test</Button>
            </div>
        </Container>
    );

}

export default Intro;