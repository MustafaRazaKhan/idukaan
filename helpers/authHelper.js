const bcrypt = require("bcrypt");


const hashpasswordfun = async(password)=>{
    try {
        const salt =10;
        const hashPassword = bcrypt.hash(password,salt)

        return hashPassword
        
    } catch (error) {
        
    }

}    
const comparepasswordfun = async(password,hashPassword  )=>{
     return bcrypt.compare(password,hashPassword)

      
        
  

}

module .exports = {hashpasswordfun,comparepasswordfun}