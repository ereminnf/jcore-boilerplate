import ModalObject from "@cmp/modal/object";
import jcoreVendor from "@vendors/jcore/vendors";
import pristineVendor from "@vendors/pristine/vendors";
import swiperVendor from "@vendors/swiper/vendors";

class MainPage {
    constructor() {
        this.init();
    }

    init() {
        // jcore.dataHref()
        // jcore.mask.phone($('.main-preview input').get());

        console.log(jcoreVendor, swiperVendor, ModalObject, pristineVendor);
        // new ModalPhone({
        //     $inputForPhone: $('.main-preview input')
        // });
        // new ObjectPhone();

    }
}

window.mainPage = new MainPage();