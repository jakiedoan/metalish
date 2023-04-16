import Alert from "react-bootstrap/Alert";
import "./alert-notification.scss";
import {BsCheck2All} from "react-icons/bs";

const AlertNotification = ({alertStatus, closeAlert, title}) =>{
    return(
        <Alert className="alert-notification-download"
               show={alertStatus}
               variant="success">
            <p>
                <BsCheck2All className="icon-success" size={20}/>
                {title}
            </p>

        </Alert>
    )
}

export default AlertNotification;