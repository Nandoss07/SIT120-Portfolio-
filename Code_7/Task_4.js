
customElements.define(
    "my-element",
    class extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        this.style.cursor = "pointer";
        this.style.userSelect = "none";
        this.style.webkitUserSelect = "none";
        this.style.MozUserSelect = "none";
        this.render();
  
        this.addEventListener("click", this.onClick);
      }
  
      disconnectedCallback() {
        this.removeEventListener("click", this.onClick);
      }
  
      /**
           * Render the content. Will render a
           * cool face if the `cool` attribute
           * is set and a neutral face otherwise
           */
      render() {
        this.innerHTML = this.cool ? "&#x1f60e" : "&#128528;";
      }
  
      /**
           * Click handler. Toggles the `cool`
           * property.
           */
      onClick() {
        this.cool = !this.cool;
      }
  
      static get observedAttributes() {
        return ["cool"];
      }
  
      attributeChangedCallback() {
        this.render();
      }
  
      get cool() {
        return this.hasAttribute("cool");
      }
  
      set cool(value) {
        if (!!value) {
          this.setAttribute("cool", "");
        } else {
          this.removeAttribute("cool");
        }
      }
    }
  );

  