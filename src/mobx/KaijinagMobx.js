import {observable, action} from 'mobx';

class KaijinagMobx {

    @observable
    data = [];

    @action
    setDatas(datas = {}) {
        this.data = datas;
    }
}

export default new KaijinagMobx();