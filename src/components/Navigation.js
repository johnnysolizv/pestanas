
import { Button, Col, Row } from 'reactstrap';

export const Navigation = ({ tabs, setTabs, setContent }) => {

    const onClickHandler = (e, value) => {    
        tabs.map((tab) => {            
            if (tab.name ===  value.name) {
                return tab.color == 'primary';
            } else {
                return tab.color == 'secondary';
            }
        })
        setContent(`Contenido de la pestaña ${value.name}.`);
    }

    return (
        <Row>
            <Col>
                {
                    tabs.map((item, i) => {
                        return <Button key={ i } className="tab-button" color={ item.color } onClick={(e) => onClickHandler(e, item)}>{item.name}</Button>
                    })
                }
            </Col>
        </Row>

    )
}