$(document).ready(() => {


    const employees = [{ user: "amddd", password: "12345" }, { user: "alii", password: "1231" }, { user: "ads", password: "75" }, { user: "awsds", password: "552" }, { user: "aoolo", password: "23" }, { user: "as", password: "66512" }, { user: "fahad", password: "535" }, { user: "njer", password: "12345" }, { user: "ttot", password: "100" }, { user: "amaddd", password: "12345" }, { user: "amdadd", password: "12345" }]
    // password with  charechters and numbers

    // IDs

    let card = $("#card")
    // inputs
    let login = $("#login")
    let password = $("#password")
    let form = $("#form")

    // buttuns
    let show_pass_btn = $("#show_password_btn")
    let login_btn = $("#login_btn")


    // logic

    login_btn.click((e) => {
        // console.log("hla");
        for (let i = 0; i < employees.length; i++) {
            // console.log("employees[i]");
            if (login.val() === employees[i].user && password.val() === employees[i].password) {
                card.css("background-color", "green")
                return;
            }
            else if (login.val() !== employees[i].user) {
                card.css("background-color", "red")
            }
        }
        e.preventDefault()
    });
    show_pass_btn.click(() => {
        // password.attr("type","text")
        // we get the attribute "type" from the password input,  we compere it then buldd the logic upon it 
        if (password.attr("type") ===  "password") {
            password.attr("type", "text")
        }else{
            password.attr("type", "password")
        }
    })

});