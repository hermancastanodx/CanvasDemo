class KjToCalorieConverter extends HTMLElement {
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="container mt-3">
          <h2>kJules to Calorie Converter</h2>
          <div class="form-group">
            <label for="kjInput">Enter kJ:</label>
            <input type="number" class="form-control" id="kjInput" placeholder="Enter kJ">
          </div>
          <button id="convertButton" class="btn btn-primary">Convert</button>
          <div id="result" class="mt-3"></div>
        </div>
      `;
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      const kjInput = shadowRoot.getElementById('kjInput');
      const convertButton = shadowRoot.getElementById('convertButton');
      const result = shadowRoot.getElementById('result');
  
      convertButton.addEventListener('click', () => {
        const kjValue = parseFloat(kjInput.value);
        const calories = kjValue / 4.184;
        result.textContent = `${kjValue} kiloJules is approximately ${calories.toFixed(2)} calories.`;
      });
    }
  }
  
  customElements.define('kj-to-calorie-converter', KjToCalorieConverter);