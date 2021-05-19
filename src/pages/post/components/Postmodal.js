import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

function modal({isOpen, toggle}) {
    console.log(isOpen)
    return <div>
        <h1>Modal</h1>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                Add Posts
            </ModalHeader>
            <ModalBody>

            </ModalBody>
            <ModalFooter>

            </ModalFooter>
        </Modal>
    </div>
}

export default modal;