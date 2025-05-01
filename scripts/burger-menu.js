let init= () => 
{
    console.log(15);
    
    let burgerBtn = document.querySelector('.burger-menu__button')

    burgerBtn.addEventListener('click',()=> 
    {
        burgerBtn.classList.toggle('burger-menu__button__active')
        let burgerMenu = document.querySelector('.burger-menu')
        burgerMenu.classList.toggle('burger-menu__active')
    })
}
export default init()