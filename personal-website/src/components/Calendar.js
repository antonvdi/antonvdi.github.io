import { Container, Row, Col } from 'react-grid-system';


function Calendar(props) {
    let dates = props.dates;
    let size = dates.length;

    return (
        <ul>
            <Container>
                <Row>
                    {dates.map(item => {
                        return <Col style={mystyle}></Col>;
                    })}
                </Row>
            </Container>
        </ul>
    )
}
const mystyle = {
    backgroundColor: "gray",
    paddingBottom: "5%",
    height:"0px",

};

export default Calendar;