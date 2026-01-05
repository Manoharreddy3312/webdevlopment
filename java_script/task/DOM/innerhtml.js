let form = document.getElementById("formContainer").innerHTML = `
    <div class="form-box">
        <div class="form-left">
            <form>
                <label>Name</label>
                <input type="text" placeholder="Enter name" rquired>

                <label>Email</label>
                <input type="email" placeholder="Enter email" rquired>

                <label>Password</label>
                <input type="password" placeholder="Enter password" rquired>

                <input type="submit" value="Submit">
            </form>
        </div>

        <div class="form-right">
     
        <img src="/assets/images/user_image.jpg" alt="User Image">     
                
        </div>
    </div>
`;
