class OverpunchElement extends HTMLElement
{
    static observedAttributes = ["chars","fontclass","spacecount"];

    shadowRoot;

    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.shadowRoot = this.attachShadow({mode: "open"});
        const span = document.createElement("span");
        span.setAttribute("class", this.getAttribute("fontclass"));
        span.setAttribute("style", "position:absolute;");
        const chars = this.getAttribute("chars");
        for (let i = 0; i < chars.length; i++)
        {
            const newchar = document.createElement("span");
            newchar.setAttribute("style", "position:absolute;left:0px;");
            newchar.textContent = chars[i];
            span.appendChild(newchar);
        }
        const spaces = document.createElement("span");
        for (let i = 0; i < Number(this.getAttribute("spacecount")); i++)
            spaces.innerHTML = spaces.innerHTML + "&nbsp;";
        this.shadowRoot.appendChild(span);
        this.shadowRoot.appendChild(spaces);
    }
}

customElements.define("over-punch", OverpunchElement);