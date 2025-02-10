let fail = document.querySelector('#Fail')
let Success = document.querySelector('#Success')
let Warning = document.querySelector('#Warning')
let notifications = document.querySelector('#notifications')

Success.addEventListener('click' , () => {
    let SuccessDiv = document.createElement('div')
    SuccessDiv.className = `bg-[#4E8D7C] w-[100%] h-[80px] rounded-[32px] text-center content-center shadow-lg transition transform translate-x-10 opacity-0 `
    SuccessDiv.innerHTML = `<h2 class="text-[34px] font-bold text-white">Success</h2> <button onclick="this.parentElement.remove()">✖️</button>`
    notifications.appendChild(SuccessDiv);

    setTimeout(() => {
        SuccessDiv.classList.remove("translate-x-10", "opacity-0");
        SuccessDiv.classList.add("translate-x-0", "opacity-100");
    }, 100);
    
    setTimeout(() => {
        SuccessDiv.classList.remove("opacity-100");
        SuccessDiv.classList.add("opacity-0", "translate-x-[10]");

        setTimeout(() => {
            SuccessDiv.remove();
        }, 500);
    }, 3000);
})


Warning.addEventListener('click' , () => {
    let SuccessDiv = document.createElement('div')
    SuccessDiv.className = `bg-[#EF8D32] w-[100%] h-[80px] rounded-[32px] text-center content-center shadow-lg transition transform translate-x-10 opacity-0`
    SuccessDiv.innerHTML = `<h2 class="text-[34px] font-bold text-white">Warning</h2> <button onclick="this.parentElement.remove()">✖️</button>`
    notifications.appendChild(SuccessDiv);

    setTimeout(() => {
        SuccessDiv.classList.remove("translate-x-10", "opacity-0");
        SuccessDiv.classList.add("translate-x-0", "opacity-100");
    }, 100);
    
    setTimeout(() => {
        SuccessDiv.classList.remove("opacity-100");
        SuccessDiv.classList.add("opacity-0", "translate-x-[10]");

        setTimeout(() => {
            SuccessDiv.remove();
        }, 500);
    }, 3000);
})


fail.addEventListener('click' , () => {
    let SuccessDiv = document.createElement('div')
    SuccessDiv.className = `bg-[#F64B3C] w-[100%] h-[80px] rounded-[32px] text-center content-center"><h2 class="text-[34px] font-bold text-white shadow-lg transition transform translate-x-10 opacity-0`
    SuccessDiv.innerHTML = `<h2 class="text-[34px] font-bold text-white">Fail</h2> <button onclick="this.parentElement.remove()">✖️</button>`
    notifications.appendChild(SuccessDiv);

    setTimeout(() => {
        SuccessDiv.classList.remove("translate-x-10", "opacity-0");
        SuccessDiv.classList.add("translate-x-0", "opacity-100");
    }, 100);
    
    setTimeout(() => {
        SuccessDiv.classList.remove("opacity-100");
        SuccessDiv.classList.add("opacity-0", "translate-x-[10]");

        setTimeout(() => {
            SuccessDiv.remove();
        }, 500);
    }, 3000);
})








