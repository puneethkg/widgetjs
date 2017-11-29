import * as React from 'react';

interface customButton extends React.StatelessComponent<{}> { }

const Component: customButton = ({ }) => (
    <button className="highiighted-btn leftMargin10" onClick={() => alert("Hello")}>
        Apply to order
    </button>
)
Component.displayName = "ActiveButton";

export default Component;