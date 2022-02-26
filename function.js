// const panels = document.querySelectorAll('.panel');


// //ForEach : It's loop
// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeClassList()
//         panel.classList.add('active')
//     })
// })


// function removeClassList() {
//     panels.forEach(panel => {
//         panel.classList.remove('active');
//     })
// }



var panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClassList();
        panel.classList.add('active');
    })
})

function removeClassList() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}