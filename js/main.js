const showColor = document.querySelector(".show");

document.addEventListener("DOMContentLoaded", function () {
  const hueInput = document.getElementById("hue");
  const saturationInput = document.getElementById("saturation");
  const lightnessInput = document.getElementById("lightness");

  const hueValue = document.getElementById("hueValue");
  const saturationValue = document.getElementById("saturationValue");
  const lightnessValue = document.getElementById("lightnessValue");

  hueValue.style.color = "black";
  saturationValue.style.color = "black";
  lightnessValue.style.color = "black";

  const colorDisplay = document.getElementById("colorDisplay");
  const copyButton = document.getElementById("copyButton");

  updateColor();

  hueInput.addEventListener("input", updateColor);
  saturationInput.addEventListener("input", updateColor);
  lightnessInput.addEventListener("input", updateColor);

  function updateColor() {
    const hue = hueInput.value;
    const saturation = saturationInput.value;
    const lightness = lightnessInput.value;

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // Update the background color
    colorDisplay.style.backgroundColor = color;

    // Display the HSL value inside "showColor"
    showColor.textContent = color;

    // Update text fields for current values
    hueValue.textContent = hue;
    saturationValue.textContent = saturation;
    lightnessValue.textContent = lightness;

    // Optional: Change the text color of showColor for better contrast
    showColor.style.color = lightness > 50 ? "black" : "white"; // Adjust based on lightness
  }

  copyButton.addEventListener("click", copyToClipboard);

  function copyToClipboard() {
    const textToCopy = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        alert("Color copied to clipboard");
      })
      .catch(function (error) {
        alert("Error copying to clipboard");
      });
  }
});

// const showColor = document.querySelector(".show");

// document.addEventListener("DOMContentLoaded", function () {
//   const hueInput = document.getElementById("hue");
//   const saturationInput = document.getElementById("saturation");
//   const lightnessInput = document.getElementById("lightness");

//   const hueValue = document.getElementById("hueValue");
//   const saturationValue = document.getElementById("saturationValue");
//   const lightnessValue = document.getElementById("lightnessValue");

//   hueValue.style.color = "black";
//   saturationValue.style.color = "black";
//   lightnessValue.style.color = "black";

//   const colorDisplay = document.getElementById("colorDisplay");
//   const copyButton = document.getElementById("copyButton");

//   updateColor();

//   hueInput.addEventListener("input", updateColor);
//   saturationInput.addEventListener("input", updateColor);
//   lightnessInput.addEventListener("input", updateColor);

//   function updateColor() {
//     const hue = hueInput.value;
//     const saturation = saturationInput.value;
//     const lightness = lightnessInput.value;

//     const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//     colorDisplay.style.backgroundColor = color;

//     showColor.textContent = color;

//     hueValue.textContent = hue;
//     saturationValue.textContent = saturation;
//     lightnessValue.textContent = lightness;
//   }

//   copyButton.addEventListener("click", copyToClipboard);

//   function copyToClipboard() {
//     const textToCopy = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;

//     navigator.clipboard
//       .writeText(textToCopy)
//       .then(function () {
//         alert("Color copied to clipboard");
//       })
//       .catch(function (error) {
//         alert("Error copying to clipboard");
//       });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const hueInput = document.getElementById("hue");
//   const saturationInput = document.getElementById("saturation");
//   const lightnessInput = document.getElementById("lightness");

//   const hueValue = document.getElementById("hueValue");
//   const saturationValue = document.getElementById("saturationValue");
//   const lightnessValue = document.getElementById("lightnessValue");

//   const colorDisplay = document.getElementById("colorDisplay");
//   const copyButton = document.getElementById("copyButton");

//   // Initialize the color on page load
//   updateColor();

//   hueInput.addEventListener("input", updateColor);
//   saturationInput.addEventListener("input", updateColor);
//   lightnessInput.addEventListener("input", updateColor);

//   copyButton.addEventListener("click", function () {
//     const hue = hueInput.value;
//     const saturation = saturationInput.value;
//     const lightness = lightnessInput.value;

//     const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

//     // Copy the color value to clipboard
//     navigator.clipboard
//       .writeText(color)
//       .then(() => {
//         alert("Color copied to clipboard: " + color);
//       })
//       .catch((err) => {
//         console.error("Could not copy color:", err);
//       });
//   });

//   function updateColor() {
//     const hue = hueInput.value;
//     const saturation = saturationInput.value;
//     const lightness = lightnessInput.value;

//     const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//     colorDisplay.style.backgroundColor = color;

//     // Update displayed values
//     hueValue.textContent = hue;
//     saturationValue.textContent = `${saturation}%`;
//     lightnessValue.textContent = `${lightness}%`;
//   }
// });
