
import UIController from "./ui_controller";
// import MaskInput from 'mask-input';
// const maskInput = new MaskInput(document.querySelector("#inpCard"), {
//   mask: '0000-0000-0000-0000',
//   maskChar: '_',
//   onChange: ui_controller.cardValidation(),
// })

const ui_controller = new UIController();
ui_controller.cardValidation();
ui_controller.nameValidation();
ui_controller.getInfo();






