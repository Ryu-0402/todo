const bcrypt = require('bcrypt');

const hashPass = async (pw) => {
 const hash = await bcrypt.hash(pw,12);   
 console.log(hash);
 
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result) {
        console.log('ok');
    } else {
        console.log('no');
    }
}

// hashPass();