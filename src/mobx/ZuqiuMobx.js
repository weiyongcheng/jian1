import {observable, action} from 'mobx';

class ZuqiuMobx {

    @observable
    data = [];

    @action
    setDatas(datas = {}) {
        this.data = datas;
    }
}

export default new ZuqiuMobx();