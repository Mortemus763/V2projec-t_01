import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  className // optional: className for the button
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = (e) => {
    e.stopPropagation();
    if (onButtonClick) onButtonClick(e); // Pass event to onButtonClick
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default OpenModalButton;