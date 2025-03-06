    let age_var = document.querySelector("#age");
    let name_var = document.querySelector("#name");
    let btn = document.querySelector("#btn");
    let form = document.querySelector("#f");
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(age_var.value == "" || name_var.value == ""){
            // throw new Error("age or name can not be empty");
            alert("Please enter valid details.");
			return;
        }
        // console.log(age_var.value, name_var.value);
        varify_fn(age_var.value,name_var.value)
        .then((message)=>{
            alert(message);
        })
        .catch((message)=>{
            alert(message);
        })

        
    });

    let varify_fn = (age_v,name_v)=>{
        let promise_obj = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (age_v>18) {
                    return resolve(`Welcome, ${name_v}. You can vote.`);
                }else{
                    return reject(`Oh sorry ${name_v}. You aren't old enough.`);
                }
            },3000);
        });
        return promise_obj;

        // return new Promise((resolve,reject)=>{
        //     if (age_v>18) {
        //         return resolve("Welcome, . You can vote.",name_v);
        //     }else{
        //         return reject("Oh sorry . You aren't old enough.",name_v);
        //     }
        // })
    }