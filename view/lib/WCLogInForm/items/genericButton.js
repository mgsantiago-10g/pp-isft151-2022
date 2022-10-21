
class GenericButton extends HTMLElement
{
    constructor(name)
    {
        super();



        this.genericButton = document.createElement('button');
        this.genericButton.className = 'w3-button';
        this.genericButton.innerText = name;


    }


    connectedCallback()
    {
        this.appendChild(this.genericButton);
    }

}

window.addEventListener('load', () => {
    customElements.define('x-generic-button', GenericButton)
})

export { GenericButton }