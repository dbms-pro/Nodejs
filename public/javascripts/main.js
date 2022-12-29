
function validateForm(form, password1, password2, messageContainer, message) {
  // Use HTML constraint API to check form validity
  let isValid = false;
  let passwordsMatch = false;

  if (form !== null && form !== undefined) {
    // Access the form object's properties here
    isValid = form.checkValidity();
  } else {
    // Handle the case where the form object is null or undefined
    return;
  }

  // If the form isn't valid
  if (!isValid) {
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if both password fields match
  if (password1.value === password2.value) {
    // If they match, set value to true and borders to green
    passwordsMatch = true;
    password1.style.borderColor = 'green';
    password2.style.borderColor = 'green';
  } else {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData(form) {
  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password1.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(form, e) {
  e.preventDefault();
  // Validate Form
  validateForm(form, password1, password2, messageContainer, message);
  // Submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFormData(form);
  }
}

module.exports = {
  validateForm: validateForm,
  storeFormData: storeFormData,
  processFormData: processFormData,
};
