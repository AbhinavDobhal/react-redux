import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken'
export function login(data){
return dispatch =>{

  console.log('asfsadsfsf',data);
  return axios.post('http://e-hallpass.test/api/auth',data).then(res=>{
  const token=res.data.email;
  localStorage.setItem('jwttoken',token);
  setAuthorizationToken(token);
  console.log('dfdfdfdfdfdfdfdfdf--');
  
   });
 
  

}

}