function getData() {
    // data collection
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

        // data validation
        if(name == ""){
        return alert("Jangan lupa isi Nama")
        } else if(email == "") {
        return alert("jangan lupa emailnya ") 
        } else if(phone == "") {
        return alert("Nomor telpon harus di isi") 
        } else if(subject == "") {
        return alert("subject harus di isi") 
        } else if(message == "") {
        return alert("Message harus di isi") 
        }
    
        // execute to email
        const myemail = "ridhoanugrah665@gmail.com"
        let a = document.createElement("a")
        a.href = `mailto:${myemail}?subject=${subject}&body= Halo nama saya ${name} , 
        bisakah anda menghubungi saya ${phone} 
        untuk membahas project ${message}`
        a.click()


        let data = {
            name,
            email,
            phone,
            subject,
            message
        }
        
        console.log(data)
        }

        

