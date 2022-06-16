import { useEffect, useState } from "react";

function FormFunction(props) {
  const [exampleLabel, setExampleLabel] = useState("");

  const handleChangeLabel = () => {
    setExampleLabel("");
  };

  useEffect(() => {
    // Everything you want to happen after the component has been mounted like fetching data from APIs

    return () => {
      // Everything you want to happen just before a component is ripped out of the DOM.
    };
  }, [props.userName]); // Empty array means run the effect only once when the component has been mounted. A value in the array means run the effect when that value changes.

  return (
    <div>
      <h1>{props.userName}</h1>

      <p>{exampleLabel}</p>

      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Example label
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
          onChange={handleChangeLabel}
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

export default FormFunction;
