document.getElementById("hamburger")?.addEventListener('click', () => {
    // increase the max height (max-h-16) tailwind property if need to add more menu items
    document.getElementById('navlinks')?.classList.toggle('max-h-20');
})
