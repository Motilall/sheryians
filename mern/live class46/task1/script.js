const arr = [
    {
        img: 'https://plus.unsplash.com/premium_photo-1687989651153-c23d9f2c9d5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Anya Sharma",
        role: "Software Engineer at TechGlobal",
        country: "India",
        location: "Bengaluru",
        email: "anya.sharma@example.com",
        phone: "+91-98765-43210"
    },
    {
        img: 'https://images.unsplash.com/photo-1642042376985-964c30c2620a?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Liam O'Connell",
        role: "Marketing Manager at Innovate Solutions",
        country: "Ireland",
        location: "Dublin",
        email: "liam.oconnell@example.com",
        phone: "+353-87-1234567"
    },
    {
        img: 'https://images.unsplash.com/photo-1635544039349-eff845bd6220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Sofia Rodriguez",
        role: "Data Analyst at Quantify Corp",
        country: "Spain",
        location: "Madrid",
        email: "sofia.rodriguez@example.com",
        phone: "+34-612-345-678"
    },
    {
        img: 'https://images.unsplash.com/photo-1587651696669-86b588f28cb4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Kenji Tanaka",
        role: "Product Designer at Creative Nexus",
        country: "Japan",
        location: "Tokyo",
        email: "kenji.tanaka@example.com",
        phone: "+81-90-9876-5432"
    },
    {
        img: 'https://images.unsplash.com/photo-1543207564-1271b510019d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        name: "Emily Chen",
        role: "Project Manager at Global Builders",
        country: "Australia",
        location: "Sydney",
        email: "emily.chen@example.com",
        phone: "+61-412-345-678"
    },
    {
        img: 'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "David Miller",
        role: "Financial Controller at Accrual Inc.",
        country: "United States",
        location: "New York",
        email: "david.miller@example.com",
        phone: "+1-212-555-0100"
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1678908439209-6c7e83b0a2c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Fatima Al-Hamad",
        role: "HR Specialist at PeopleFirst",
        country: "United Arab Emirates",
        location: "Dubai",
        email: "fatima.hamad@example.com",
        phone: "+971-50-1234567"
    },
    {
        img: 'https://images.unsplash.com/photo-1531311243148-d2653fa84700?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Oliver Hansen",
        role: "Research Scientist at BioGen Labs",
        country: "Germany",
        location: "Berlin",
        email: "oliver.hansen@example.com",
        phone: "+49-176-98765432"
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1664379519132-aa97377491ca?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Isabelle Dubois",
        role: "UX Designer at Digital Creations",
        country: "France",
        location: "Paris",
        email: "isabelle.dubois@example.com",
        phone: "+33-6-12-34-56-78"
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1709865785911-4e469c91f169?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Carlos Silva",
        role: "Sales Executive at Market Growth Co.",
        country: "Brazil",
        location: "São Paulo",
        email: "carlos.silva@example.com",
        phone: "+55-11-99876-5432"
    },
];
var sum = '';
arr.forEach(function(elem){
    sum += `<div class="card">
        <div class="card_top">
            <img src="${elem.img}" alt="">
        </div>

        <div class="card_middle">
            <h1>${elem.name}</h1>
            <button>${elem.role}</button>
        </div>

        <div class="card_bottom">
            <div class="card_bottom_left">
                <div class="card_bottom_left_location">
                    <i class="ri-map-pin-5-line"></i>
                    <h4>Location: </h4>
                </div>
                <div class="card_bottom_left_email">
                    <i class="ri-mail-line"></i>
                    <h4>Emai: </h4>
                </div>
                <div class="card_bottom_left_phone">
                    <i class="ri-cellphone-fill"></i>
                    <h4>Phone: </h4>
                </div>
            </div>

            <div class="card_bottom_right">
                <h4>${elem.location}</h4>
                <h4>${elem.email}</h4>
                <h4>${elem.phone}</h4>
            </div>
        </div>
    </div>`
})


var body = document.querySelector('body')
body.innerHTML = sum;
console.log(sum)


// find image on a pinterest 'user card ui' and get a 10 user data from ChatGPT the same properties on the image you got on pintreset and inset the data off array of object in the ui