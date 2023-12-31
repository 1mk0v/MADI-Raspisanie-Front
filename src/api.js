class API {

    _getResponse (res) {
        return res.ok ? res.json(): Promise.reject()
    }

    constructor(path) {
        this.host = 'http://127.0.0.1:8000'
        this.communityHost = this.host + path
        this.scheduleHost = this.host + '/schedule' + path
        this.examHost = this.host + '/exam' + path
    }

    async get() {
        let url = `${this.communityHost}`;
        const res = await fetch(url = url);
        return this._getResponse(res);
    }

    async getSchedule(id) {
        let url = `${this.scheduleHost}/${id}`;
        const res = await fetch(url = url);
        return this._getResponse(res);
    }

    async getExam(id) {
        let url = `${this.examHost}/${id}`;
        const res = await fetch(url = url);
        return this._getResponse(res);
    }
}

const TEACHER_API = new API('/teacher')
const GROUP_API = new API('/group')
const DEPARTMENT_API = new API('/department')

export { TEACHER_API, GROUP_API, DEPARTMENT_API }