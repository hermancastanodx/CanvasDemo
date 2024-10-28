const template = document.createElement('template')
template.innerHTML = `
    <div class="container mt-3">
        <h2><slot></slot></h2>
        <div class="form-group">
            <label for="kjInput">Enter kJ:</label>
            <input type="number" class="form-control" id="kjInput" placeholder="Enter kJ">
        </div>
        <button id="convertButton" class="btn btn-primary">Convert</button>
        <div id="result" class="mt-3"></div>
    </div>
    `
    class KjulesConverter extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" })
            shadow.append(template.content.cloneNode(true))

            this.kjInput = shadow.getElementById('kjInput');
            this.result = shadow.getElementById('result');

            const convertButton = shadow.getElementById('convertButton');
            convertButton.addEventListener('click', () => {
                const kjValue = parseFloat(this.kjInput.value);
                this.updatekjulesvalue(kjValue);
            });
        }

        static get observedAttributes() {
            return ["kjules"]
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log(name, oldValue, newValue);
            if (name == "kjules") {
                console.log("KJulesConverter::attributeChangedCallback name = " + name);
                this.updatekjulesvalue(newValue);
            }
        }

        connectedCallback() {
            console.log ("KJulesConverter::connectedCallback");
        }

        disconnectedCallback() {
            console.log ("KJulesConverter::desconnectedCallback");
        }

        updatekjulesvalue(value) {
            console.log("KJulesConverter::updatekjulesvalue value = " + value);
            this.kjInput.value = value;
            const calories = value / 4.184;
            console.log("value = " + value);
            console.log("calories = " + calories);
            this.result.textContent = `${value} kiloJules is approximately ${calories.toFixed(2)} calories.`;
        }
    }

    customElements.define('kjules-converter', KjulesConverter);