let age_var = document.querySelector("#age");
let name_var = document.querySelector("#name");
let btn = document.querySelector("#btn");
let form = document.querySelector("#f");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (age_var.value.trim() === "" || name_var.value.trim() === "") {
        alert("Please enter valid details.");
        return;
    }

    verify_fn(age_var.value, name_var.value)
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});

let verify_fn = (age_v, name_v) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age_v > 18) {
                resolve(`Welcome, ${name_v}. You can vote.`);
            } else {
                reject(`Oh sorry ${name_v}. You aren't old enough.`);
            }
        }, 3000);
    });
};
