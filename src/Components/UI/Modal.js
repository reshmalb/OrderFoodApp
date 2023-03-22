import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom';

const ModalOverlays=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const Backdrop=props=>{
    return <div className={classes.backdrop}>

    </div>
}

const portalElement=document.getElementById('overlays');

const Modal=props=>{

    return <Fragment>
          {ReactDOM.createPortal(<Backdrop/>,
          portalElement)}
          {ReactDOM.createPortal(<ModalOverlays>{props.children}
          </ModalOverlays>,portalElement)}
    </Fragment>


}
export default Modal;