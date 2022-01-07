const add_btn = document.querySelector('.add-btn')
const model = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const book_title= document.querySelector('.book-title')
const add_book_btn=document.querySelector('.add-book-btn')

console.log(book_title)
console.log(add_book_btn)
let books=[]


const showModal =()=>{
     model.classList.add('show-modal')  
}

const hideModal =()=>{
    model.classList.remove('show-modal')
}

const fetchBookTitle =(event)=>{
    event.preventDefault()
    const book={
        book_title:book_title.value
    }
    books.push(JSON.stringify(book))
    console.log(books)
}


add_book_btn.addEventListener('click',fetchBookTitle)
hide_modal.addEventListener('click',hideModal)
add_btn.addEventListener('click',showModal)