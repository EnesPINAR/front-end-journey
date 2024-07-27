import React from "react";

const ClearForm = () => {
    return <button className="ClearForm" onClick={() => {
        var form = document.querySelector("form");
        form.reset();
    }}>Clear All</button>;
}

export default ClearForm;