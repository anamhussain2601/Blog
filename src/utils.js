const validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  
  const validatePhone = phone => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };
  
  const validateWebsite = website => {
    var res = website.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) return false;
    else return true;
  };

  const validateFields = (data, fieldName) => {
    let { name, email, phone, website } = data;
    if (!data[fieldName]) {
      return false
    }else{
      if(fieldName === 'name'){
        return true;
      }
      else if(fieldName === 'email'){
        return validateEmail(email)
      }else if(fieldName ==='phone'){
        return validatePhone(phone)
      }else if(fieldName === 'website'){
        return validateWebsite(website)
      }
    }
  };

  const submitButtonStatus = (userData, validation) =>{
    let {name, email, phone, website} = userData;
    if(name && email && phone && website){
      let {name, email, phone, website} = validation;
      if(name && email && phone && website){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  } 

  export {
    validateEmail,
    validatePhone,
    validateWebsite,
    validateFields,
    submitButtonStatus
  }