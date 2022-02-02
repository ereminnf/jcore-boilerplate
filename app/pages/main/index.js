import ObjectPhone from "../../components/modal/object";
import ModalPhone from "../../components/modal/phone";

class MainPage {
    constructor() {
        this.init();
    }

    init() {
        jcore.dataHref()
        jcore.mask.phone($('.main-preview input').get());

        new ModalPhone({
            $inputForPhone: $('.main-preview input')
        });
        new ObjectPhone();
    }
}

window.mainPage = new MainPage();