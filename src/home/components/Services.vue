<template>
    <div>
        <h2 id="h2">Contact us</h2>
        <div class="container">
            <!---->     
            
            <div class="child 1" id="d1">
                <form action="" id="messageForm" autocomplete="on">
                    Leave us a message <br><br>
                    <label for="name">* Name:</label><br>
                    <input type="text" id="name" name="name" placeholder="Johnson Wills"><br><br>
                    <label for="email">* email:</label><br>
                    <input type="text" id="email" name="mail" placeholder="JohnsonWills@eloquent.come"><br><br>
                    <label for="message">* message</label><br>
                    <textarea name="message" placeholder="Hi! pls type your message here"></textarea><br>
                    <input type="submit" value="Submit" title="Click to leave your message">
                </form> 
            </div>
            <div class="child 2" id="d2">
                    <form action="" id="contactForm">
                        Reach us through
                        <p id="p1">
                            <img src="phone.png" alt=""> +234 903 020 4879 <br><br>
                            <a href="mailto:thinkingeloquently@gmail.com">
                                <img src="./../../assets/png/mail.png" alt=""> thinkingeloquently@gmail.com
                            </a>
                            <br><br>
                            Our media Handles: <br>
                            <a href="https://m.facebook.com/thinkEloquently" title="Visit our facebook page">
                                <img src="./../../assets/png/facebook.png" alt="">
                                facebook.com/thinkEloquently
                            </a><br><br>
                            <a href="https://www.linkedin.com/company/thinkeloquently" title="Check us out on linkedin">
                                <img src="./../../assets/png/linkedin.png" alt="">
                                linkedin.com/company/thinkeloquently
                            </a>
                        </p>
                    </form>
                    
                </div>
            </div> 
        </div>
</template>

<script>
    export default {
        name: 'Service'
    }
</script>

<style scoped>
form {
    font-size: larger;
    padding: 25px;
}
#message {
    width: 500px;
    height: 500px;
}

#h2{
    text-align: center;
    text-shadow: silver;
    color: gold;
}
input {
    padding: 2px;
    margin: 2px;
    border: 2px solid gold;
    border-radius: 50px;
}
textarea {
    padding: 2px;
    margin: 2px;
    border: 2px solid gold;
    border-radius: 10px;
    
}
.container {
    display: flex;
}
.child {
    flex: 1;
}  
.child:first-child{
    margin-right: 2px;
}
form {
font-size: larger;
padding: 25px;
}
#message {
    width: 500px;
    height: 500px;
}
input {
    padding: 2px;
    margin: 2px;
    border: 2px solid gold;
    border-radius: 50px;
}
textarea {
    padding: 2px;
    margin: 2px;
    border: 2px solid gold;
    border-radius: 10px;
    
}
.container {
    display: flex;
}
.child {
    flex: 1;
}  
.child:first-child{
    margin-right: 2px;
}
img {
    width: 25px;
    height: 25px;
}
</style>