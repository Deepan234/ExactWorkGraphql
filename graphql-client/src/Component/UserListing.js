import { useQuery } from '@apollo/client'
import React from 'react'
import { FETCH_USER } from '../GraphQl/Query'
import {Container} from '@material-ui/core'
import { useState } from 'react'
import { useLayoutEffect } from 'react'

export default function UserListing() {

const{data,loading} = useQuery(FETCH_USER);

console.log(data);

const[school,setSchool] = useState(data);

useLayoutEffect(() => {
    if(data){
    setSchool(data);
    console.log(school);
    }
  }, [data,school])

const dataListing = () =>{     
  if(loading){
      return(
          <div>Loading...</div>
      )
  }
  else{
      console.log(school);
      return(
          <div>
             <div>
            <Container maxWidth="lg" style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)", 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br />
                <br />
                <div>
                    <Container maxwidth="sm" style={{textAlign:"center",backgroundColor:'whitesmoke'}}>
                       <h4>
                          ALL SCHOOLS AVAILABLE HERE IS 
                       </h4>
                    </Container>
                    <br/>
                    <br/>
                </div>
                <Container maxWidth="md" style={{overflowX:'auto'}}>
                    <div className="conatiner">
                        <div className="row">
                            <table className="table table-dark table-stripped table-hover m-auto">
                                <thead className="table-light ">
                                    <tr className="table-secondary">
                                        <th>ID</th>
                                        <th>SCHOOL NAME</th>
                                        <th>ABOUT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {  school &&
                                        school.school.map((user) => {
                                            const {id,name,about } = user;
                                            console.log(id);
                                            return (
                                                <tr key={id}>
                                                    <td>{id}</td>
                                                    <td>{name}</td>
                                                    <td>{about}</td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
                <br />
                <br />
        </Container>
        </div>
          </div>
      )
  }
}
  return (
   <div>
     {dataListing()}       
   </div>    
  )
}
