import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleLabel: "",
      anotherLabel: "",
    };
  }
  render() {
    return (
      <div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Example label
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Another label
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
      </div>
    );
  }
}
