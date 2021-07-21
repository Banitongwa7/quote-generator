const quote = document.getElementById('quote');

quote.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
        quote.innerHTML = data.content+'('+data.author+')';
    })

    fetch('https://picsum.photos/1600/1000')
    .then((res) => {
        document.getElementById('pic').innerHTML = '<img src="'+res.url+'" alt="image"/>'
    })
})

