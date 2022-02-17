const {RESTDataSource} = require('apollo-datasource-rest')

class SchoolAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "http://localhost:8777/school";
    }

    async getSchoolById(id){
        const data = await this.get(`/getSchool/${id}`);
        return data;
    }

    async getSchools(){
        const data = await this.get(`/getallschool`);
        return data
    }

}

module.exports = SchoolAPI;