// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyCPgIslQeDu0RZijt1oFKY2LMVTImGij5M",
    authDomain: "all-the-colors.firebaseapp.com",
    databaseURL: "https://all-the-colors-default-rtdb.firebaseio.com",
    projectId: "all-the-colors",
    storageBucket: "all-the-colors.appspot.com",
    messagingSenderId: "317510826764",
    appId: "1:317510826764:web:b70737332f51451535e729",
    measurementId: "G-HYGJQ79FR8"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }