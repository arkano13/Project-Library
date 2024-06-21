const create= document.querySelector(".new-book");
const main = document.querySelector(".book-container");
const bookDiv=document.querySelector(".book-div");

create.addEventListener('click',()=>{

    const title = document.querySelector("#title").value;
    const autor = document.querySelector("#autor").value;
    const page = document.querySelector("#page").value;
    const read = document.querySelector("#checkbox").checked;

    const newBook = new books(title, autor, page, read);


    if (title === "" || autor === "" || page === "" || page<=0){ 
        alert("xd")
    }else{
        let div= document.createElement("div");
        div.className= 'book-div';
        main.appendChild(div);
    
    
        let label=document.createElement("div");
        label.className='information';
        label.textContent=  newBook.info();
    
        const remove=document.createElement("button");
        remove.className="remove";
        remove.textContent="remove";

        const change=document.createElement("button");
        change.className="change";
        change.textContent="change";
    
    
        div.appendChild(label);
        
        div.appendChild(remove)  ;
        div.appendChild(change)  ;
    
    
        const book=new books(title, autor, page );  
        console.log(book.info());
    
        remove.addEventListener('click',()=>{
        
            div.remove()
         
           })
           
        change.addEventListener('click',()=>{
            newBook.read=!newBook.read
            label.textContent = newBook.info();
        
           })
    }
})

books.prototype.info= function(){
   

    return ` Title: ${this.title} \nAutor: ${this.autor} \nPages: ${this.page}  \nRead: ${this.read ? 'Yes' : 'No'}`
}

function books(title, autor, page, read){
    this.title=title
    this.autor=autor
    this.page=page
    this.read= read
  }
  
  
 
  