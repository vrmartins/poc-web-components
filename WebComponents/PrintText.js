class PrintText extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    console.log(shadow)

    const p = document.createElement('p');
    p.append(this.getAttribute('text'))
    shadow.appendChild(p)
  }
}

customElements.define('print-text', PrintText);
