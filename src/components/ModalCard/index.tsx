import Modal from "react-modal";
import FormAdd from "../FormAdd";
import FormEdit from "../FormEdit";

interface IProps {
  // children: React.ReactNode;
  setVisible: boolean;
  setIsVisible: (item: boolean) => void;
  changeClose: () => void;
  edit: boolean;
  id?: number;
}

const ModalCard = ({
  setVisible,
  changeClose,
  setIsVisible,
  edit,
  id,
}: IProps) => {
  return (
    <Modal
      isOpen={setVisible}
      style={{
        content: {
          zIndex: 999999,
          maxWidth: 500,
          margin: "0 auto",
          padding: 20,
        },
      }}
      ariaHideApp={false}
      // className={styles.overlay}
      overlayClassName="Overlay"
      shouldCloseOnEsc
      contentLabel="onRequestClose Example"
      shouldCloseOnOverlayClick={true}
      onRequestClose={changeClose}
      // key={cardId}
    >
      {edit ? (
        <FormEdit idKeys={id} setIsVisible={setIsVisible} />
      ) : (
        <FormAdd setIsVisible={setIsVisible} />
      )}
    </Modal>
  );
};

export default ModalCard;
