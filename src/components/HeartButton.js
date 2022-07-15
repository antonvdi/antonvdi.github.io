import {Link,} from "react-router-dom";

function HeartButton(props) {

    return (
        <div style={placement}>
            <Link to={props.link}>
                <img src="/images/favorite_FILL0_wght400_GRAD0_opsz48.png" alt="<3" style={heartStyle} />
            </Link>
        </div>
    );
}

const heartStyle = {
    width: "50px",
    height: "50px",
};
const placement = {
    position: "fixed",
    right: "0px",
    bottom: "0px",
}

export default HeartButton;