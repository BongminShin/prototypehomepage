import React, { Component } from 'react';
import NavTab from '../components/navtab/NavTab';

const navContentData = [
    {
      content:
        "This is the first panel",
      title: "first"
    },
   {
    content:
        "This is the second panel",
    title: "second"
    },
    {
      content:
        "This is the third panel",
      title: "third"
    }
]

class Contact extends Component {
    render() {
        return (
            <div className="margin-10">
                <NavTab contents={navContentData}/>
                {/* <div className="border-tab-content">
                    <h2>Contact</h2>
                </div> */}
            </div>
        );
    }
}

export default Contact;