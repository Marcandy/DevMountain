function validateForm(name, email, password, age) {
  if(!name || !email || !password || !age ) {
    return false;
  }
  if(typeof age !== "number") {
    return false;
  }

  if(password.length < 6  || password === "password") {
        return false;
      }
  if(name.indexOf(" ") === -1) {
      return false;
  }
    return true;
}

var isValidOne = validateForm("John Doe", "jd@gmail.com", "hunter2", 34);
var isValidTwo = validateForm();
console.console.log(isValidOne, isValidTwo);
