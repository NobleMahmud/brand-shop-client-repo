import { Outlet } from "react-router-dom";

const LayOut = () => {
    return (
        <div>
            <h3>main layout</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;