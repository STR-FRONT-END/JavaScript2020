//Client side Routing --- Routing is handled internally by the JavaScript

blog.addEventListener('click', e => {
    //prevents the default behaviour, which is to route using the href of the achor tag
    e.preventDefault()
    //history api of html5, pushState method takes a couple of nulls and the change to add to the url
    history.pushState(null, null, 'blog')
})

about.addEventListener('click', e => {
    e.preventDefault()
    history.pushState(null, null, 'about')
})

back.addEventListener('click', e => {
    e.preventDefault()
    history.back()
})

forward.addEventListener('click', e => {
    e.preventDefault()
    history.forward()
})