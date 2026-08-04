import { db } from "./firebase.js";

import {
    collection,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", login);


async function login(){

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");


    if(username === "" || password === ""){

        message.style.color = "red";
        message.innerText = "Enter username and password";

        return;
    }


    try{

        const userQuery = query(
            collection(db,"users"),
            where("username","==",username)
        );


        const result = await getDocs(userQuery);


        if(result.empty){

            message.style.color="red";
            message.innerText="User not found";

            return;
        }


        const userData = result.docs[0].data();


        if(userData.password !== password){

            message.style.color="red";
            message.innerText="Wrong password";

            return;
        }


        message.style.color="green";
        message.innerText="Login successful";


        sessionStorage.setItem(
    "user",
    JSON.stringify(userData)
);


if(userData.roll === "admin"){

    window.location.href="admin.html";

}
else if(userData.roll === "staff"){

    window.location.href="staff.html";

}


    }
    catch(error){

        console.log(error);

        message.style.color="red";
        message.innerText="Database error";

    }

}