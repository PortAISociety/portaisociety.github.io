function submit() {
    if (document.getElementById('checkbox').checked) {

        let string = ""
        string += "Hi " +  document.getElementById('nametextbox').value
        string += "! Today is " + document.getElementsByClassName('dateinputbox')[0].value
        string += ", and you have just used Selenium to fill in a form!"
        string += " Your favourite Colour is " + document.getElementById('favouritecolour').value
        string += " and finally, your favourite Number is " + document.getElementById('favouritenumber').value
        string += "! Thankyou for coming to this Artificial Intelligence & Robotics Society Taster. Join up at https://membership.upsu.net/group/artificial-intelligence-robotics"

        document.getElementById('output').textContent = string



    } else {
        document.getElementById('output').textContent = "Tick the Checkbox before submitting"
    }
}