import React, {useState} from "react";
import {Button} from "react-bootstrap";

function Intro({testVar}) {

    const [updatableTestVar, setUTestVar] = useState(testVar);

    return (
        <div>
            Hello and welcome. This is the Intro {testVar}, {updatableTestVar}
            <div>
                <Button onClick={() => {setUTestVar(updatableTestVar + "AA - ")}} >Test</Button>
            </div>
        </div>
    );

}

export default Intro;