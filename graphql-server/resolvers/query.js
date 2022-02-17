module.exports={
    school: (parent,args,{dataSources},info) => {
        return dataSources.schoolAPI.getSchools(args);
    },
    schoolById:(parent,{id},{dataSources},info) =>{
        return dataSources.schoolAPI.getSchoolById(id);
    },
}