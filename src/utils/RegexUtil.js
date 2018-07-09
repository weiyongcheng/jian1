const PWDREGEX = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$'; //登录注册密码强度

export default class RegexUtil {

    //校验电话号码
    static checkTelPhone(phone) {
        if (typeof phone === 'number') {
            phone = phone + '';
        }
        phone = ((typeof phone) === 'string') ? phone : '';
        let reg = new RegExp('^1(3|4|5|7|8)[0-9]{9}$');
        let result = reg.test(phone);
        let errorTitle = '';
        if (result === false) {
            errorTitle = phone.length > 0 ? '手机号码无效' : '手机号码不能为空';
        }
        return {
            errorTitle: errorTitle,
            ok: result,
        };
    }

    //校验密码
    static checkPassword(password) {
        password = ((typeof password) === 'string') ? password : '';
        //排除空格
        if (password.indexOf(' ') > 0) {
            return {
                errorTitle: '密码8~20位数，仅支持数字、大小写字母',
                ok: false
            };
        }
        const reg = new RegExp(PWDREGEX);
        //不能包含空格
        let result = reg.test(password);
        let errorTitle = '';
        if (!result) {
            errorTitle = password.length > 0 ? "密码8~20位数，仅支持数字、大小写字母" : "密码不能为空";
        }
        return {
            errorTitle: errorTitle,
            ok: result,
        }
    }

    //校验密码
    static checkAgainPassword(password) {
        password = ((typeof password) === 'string') ? password : '';
        //排除空格
        if (password.indexOf(' ') >= 0) {
            return {
                errorTitle: '确认密码8~20位数，仅支持数字、大小写字母',
                ok: false,
            };
        }

        const reg = new RegExp(PWDREGEX);
        //不能包含空格
        let result = reg.test(password);
        let errorTitle = '';
        if (result === false) {
            errorTitle = password.length > 0 ? '确认密码8~20位数，仅支持数字、大小写字母' : '确认密码不能为空';
        }
        return {
            errorTitle: errorTitle,
            ok: result,
        };
    }

    //校验验证码 设置为6位
    static checkVerificationCode(code) {
        code = ((typeof code) === 'string') ? code : '';
        let reg = new RegExp('^[0-9a-zA-Z]{1,10}$');
        let result = reg.test(code);
        let errorTitle = '';
        if (!result) {
            errorTitle = code.length > 0 ? '验证码错误，请重新输入' : '验证码不能为空';
        }
        return {
            errorTitle: errorTitle,
            ok: result,
        };
    }
}