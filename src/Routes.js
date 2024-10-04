import React from "react";
import { Routes, Route } from "react-router-dom";
import {
InvestorInfoForm, 
InvestorInfoForm
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
            
                <Route path="/infoform" element={<InvestorInfoForm {...props} title={'Infoform 1'} />} />
                <Route path="/infoform" element={<InvestorInfoForm {...props} title={'Infoform'} />} />
        </Routes>
    )

};

export default Component;