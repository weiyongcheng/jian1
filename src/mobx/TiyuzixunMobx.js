import {observable, action} from 'mobx';

class TiyuzixunMobx {

    @observable
    data = [];

    @action
    setDatas(datas = {}) {
        this.data = datas;
    }
}

export default new TiyuzixunMobx();