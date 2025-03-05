//your JS code here. If required.
    let age_var = document.querySelector("#age");
    let name_var = document.querySelector("#name");
    let btn = document.querySelector("#btn");

    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(age_var.value == "" || name_var.value == ""){
            throw new Error("age or name can not be empty");
            // alert(" age or name can not be empty");
        }
        // console.log(age_var.value, name_var.value);
        varify_fn(age_var.value,name_var.value)
        .then((message)=>{
            alert(message);
        })
        .catch((message)=>{
            alert(message);
        })
        // .finally((message)=>{
        //     alert(message);
        // });
        
        
    });

    let varify_fn = (age_v,name_v)=>{
        let promise_obj = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (age_v>18) {
                    return resolve("Welcome, . You can vote.",name_v);
                }else{
                    return reject("Oh sorry . You aren't old enough.",name_v);
                }
            },4000);
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