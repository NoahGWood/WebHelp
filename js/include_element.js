class IncludeElement extends HTMLElement{
    static observedAttributes = ["src", "type"];
    src = "";
    constructor() {
        super();
    }
    
    connectedCallback(){
        console.log("Include Element added to page.");
    }
    disconnectedCallback(){
        console.log("Include Element removed from page.");
    }
    adoptedCallback(){
        console.log("Include Element moved to new page.");
    }
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed.`);
      if(name==="src" && oldValue != newValue) {
        this.src = newValue;
        this.loadElement();
    }
    }

    loadElement(){
        try {
            fetch(this.src,
                {
                    method: "GET",
                    mode: "cors"
                })
            .then((response) => response.text())
            .then((html) =>{
                this.innerHTML = html;
            })
        } catch (error) {
            console.log(error);
        }
    }
}
customElements.define("include-element", IncludeElement);