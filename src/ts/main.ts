document.querySelector('#burger')?.addEventListener('click',() => {
  document.querySelector('#line2')?.classList.toggle('hidden')
  document.querySelector('#line1')?.classList.toggle('rotate-45')
  document.querySelector('#line1')?.classList.toggle('top-4')
  document.querySelector('#line1')?.classList.toggle('absolute')
  document.querySelector('#line3')?.classList.toggle('-rotate-45')
  document.querySelector('#line3')?.classList.toggle('top-4')
  document.querySelector('#line3')?.classList.toggle('absolute')
 
})

document.getElementById('moon')?.addEventListener('click',() => {
  document.documentElement.classList.add('dark')
  localStorage.setItem('modo', 'dark');
})
document.getElementById('sun')?.addEventListener('click',() => {
  document.documentElement.classList.remove('dark')
  localStorage.setItem('modo', 'light');
})

const themeMode = localStorage.getItem('modo');
if (themeMode) {
    document.documentElement.classList.add(themeMode);
}