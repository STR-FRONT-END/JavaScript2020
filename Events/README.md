#### Event Listener
[MDN Event Listeners](https://developer.mozilla.org/en-US/docs/Web/Events)
* Once we have an element selected, we can use the `.addEventListener` method on that element
* takes two arguments, first the event to listen for and, second, the callback to fire when that event is triggered.
`element.addEventListener('click', (event) => {//Handle event})`
#### The callback and the Event Object
* callback (also known as an event handler) will take a single argument; this is known as the Event Object
* The event object contains all we need to know about the event and the element it happened on
* One of the most important properties of the event object is **.target**, this property will give us all of the info about the DOM node where the event happened. It has many of the same properties as a regular DOM node, .children, .parent, .style, innerText, etc. We can use these properties to manipulate the element itself, or it’s relatives.
`element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });`
[ MDN Event Object: Properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#Properties)



# [Event Propagation](https://www.youtube.com/watch?v=xX61Risr-nc&feature=youtu.be)
[Event Propagation](https://tk-assets.lambdaschool.com/b1c4f450-e8b4-46d5-9be2-3cae1f2bb5f6_ScreenShot2019-01-30at18.27.09.png)
* an event triggered on a child will also trigger it on the parent
*Think of a pyramid. Pyramids are made up of many layers, the bottom layer is the largest and as it goes higher, ever decreasing sized layers are added to the one before it. If you are standing on the uppermost layer of a pyramid, you are also standing on every layer below it. When we look at a DOM tree we can see those child elements are nested inside parent elements, like a pyramid. And, like a pyramid, if you stand(trigger an event) on a child element, you are also triggering that same event on every parent element all the way up to the body. This process is called event propagation. If you have an event of the same type on a parent element and a child element, and you trigger that event on the child element, it will also trigger on the parent. We have to be careful not to create unwanted interactions because of this. In the future, you may consider this is a feature, for now, this is something we would like to avoid.*