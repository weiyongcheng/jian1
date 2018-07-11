import {observable, computed, action} from 'mobx';

class UserMobx {

    @observable
    data = {};

    @action
    setDatas(datas = {}) {
        this.data = datas;
    }
}

export default new UserMobx();