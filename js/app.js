/**
 * Collect Data 
 * Validate Data
 * Store Data
 * Display Data
 */

/**Build class to collect data */
class Book {
    constructor(bookTitle, bookAuthor, bookFormat, yrReleased, category, genre) {
        this.bookInfo =  {
            bookAuthor: bookTitle,
            bookAuthor: bookAuthor,
            bookFormat: bookFormat,
            yrReleased: parseInt(yrReleased),
            category: category,
            genre: genre
        }
    }

    returnGenres() {
        this.bookInfo.genre.forEach(item => {
            console.log(item)
        })
    }

    getDescription(bookTitle, bookAuthor, yrReleased) {
        return `${bookTitle} is a work by ${bookAuthor} first released in ${yrReleased}`
    }

}

    


/**Outside of class */

/** get submitBtn */


const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    let obj = {}

    obj = {...getInfo()}

    const book = new Book(
        obj.title,
        obj.author,
        obj.bookFormat,
        obj.year, 
        obj.category,
        obj.genres
    )


        
    
    //console.log(book)
    buildCard(book.bookInfo, book.getDescription)


})

const getInfo =()=> {
    const title = document.getElementById('bookTitle').value 
    const author = document.getElementById('bookAuthor').value
    const year = document.getElementById('yrReleased').value

    const bookFormat = document.querySelector('input[name="bookFormat"]:checked').value
    
    const category = document.querySelector('input[name="category"]:checked').value

    const bookGenres = document.querySelectorAll('input[name="genres"]')

    let genres = []

    bookGenres.forEach(item => item.checked ? genres = [...genres, item.value] : null)

    return { title, author, year, bookFormat, category, genres }

    }


    const buildCard =(obj, func)=> {
        const row = document.getElementById('cardRow')

        const column = document.createElement('div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'h-100')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const title = document.createElement('h3')
        title.classList.add('card-title', 'text-capitalize', 'text-primary')
        title.innerText = obj.bookTitle

        const author = document.createElement('p')
        author.classList.add('card-text', 'text-capitalize', 'text-danger', 'fst-italic')
        author.innerText = obj.bookAuthor

        const categoryText = document.createElement('p')
        categoryText.classList.add('card-text', 'text-capitalize')
        categoryText.innerText = obj.category

        const ul = document.createElement('ul')
        ul.setAttribute('id', 'genreList')

        obj.genre.forEach(genre=> {

            const li= document.createElement('li')
            li.classList.add('list-item', 'text-capitalize')
            li.innerText = genre

            ul.appendChild(li)

        })

        const cardFooter = document.createElement('footer')
        cardFooter.classList.add('card-footer')

        const description = document.createElement('p') 
        description.classList.add('card-text', 'fst-italic')
            
        description.innerText= func(obj.bookTitle, obj.bookAuthor, obj.yrReleased)


        cardBody.appendChild(title)
        cardBody.appendChild(author)
        cardBody.appendChild(categoryText)
        cardBody.appendChild(ul)

        cardFooter.appendChild(description)

        card.appendChild(cardBody)
        card.appendChild(cardFooter)

        column.appendChild(card)

        row.appendChild(column)
        

    }