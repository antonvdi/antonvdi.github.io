
export default function GravitationsLegeme(props) {
    let xPos = props.xPos;
    let yPos = props.yPos;
    let radius = props.radius;
    let color = props.color;

    const gravitationalBody = {
        width: `${radius}px`,
        height: `${radius}px`,
        borderRadius: "50%",
        position: "relative",
        backgroundColor:` ${color}`,
        left: `${xPos}px`,
        top: `${yPos}px`,
    };

    return (
    <div style={gravitationalBody}></div>
    );
}