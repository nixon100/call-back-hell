let count = 10;
const n1 = document.querySelector(".num");
const n2 = document.querySelector("div > p");
   

        

const animate=(tag)=>{



    setTimeout(()=> {
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tag(n1)
    setTimeout(()=>{
        tagremove(n1)
        tag1(n2)
        
       
},1000)
},1000)
},1000)
},1000)        
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)

}

const tag = (n1)=>{

    n1.textContent = count
    n1.classList.add("animation")
    count = count - 1
    
} 

const tag1 = (_tag)=>{
    
    n2.classList.add("animate")
    

}

const tagremove = (tag_) => {
    tag_.classList.remove("animation")

}

animate(tag,tagremove,tag1);
