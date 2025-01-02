var formContainer = document.getElementsByClassName("contact-form")[0] // Container Where the form is located

function ajaxSuccess() {
    formContainer.innerHTML = `
    <div class="alert alert-success" role="alert">
        Your Query Has Been Submitted, Thank you! <br>
        Our Team Will Reach Out To You Soon
    </div>
    <button type="button" class="btn btn-info" onclick="restartFeedback()">Add Another Query</button>

    `
}
function ajaxError() {
    formContainer.innerHTML = `
    <div class="alert alert-danger" role="alert">
        Uh-oh! We Are Having Trouble Reaching Our Systems <br>
        Please Try Again Later
    </div>
    <button type="button" class="btn btn-info" onclick="restartFeedback()">Try Again</button>

    `
}
function restartFeedback() {
    formContainer.innerHTML = `
        <form id="feedbackForm" onsubmit="return false">
          <select name="query" required>
            <option value="" disabled selected>How can we help you?*</option>
            <option value="order">Issue with an Order</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other Queries</option>
          </select>
          <input type="text" name="name" placeholder="Full Name*" required>
          <input type="email" name="email" placeholder="Email Address*" required>
          <input type="text" name="mobile" placeholder="Mobile Number (optional)">
          <textarea name="message" placeholder="Type text*" required></textarea>
          <button type="submit" class="submit-btn" onclick="submitFeedback()">Submit Feedback</button>
        </form>
    `
}

function submitFeedback() {

    var formData = new FormData(document.getElementById("feedbackForm"))
    
    // keep the url empty to see the success event
    // or put it any other to see the failure event
    // this is just the client side code, a server side worker is required to
    // make this work
    url = "" 
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url)
    xhr.send(formData)

    xhr.onload = function () {
        if (xhr.status == 200) {
            ajaxSuccess()
        }
        else {
            ajaxError()
        }
    }

    xhr.onerror = function () {
        ajaxError()
    }
}