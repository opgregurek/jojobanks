import * as React from "react";

// function to copy given text to the clipboard
export default function copyTextToClipboard(text: string) {
  // if the new clipboard api is not available use the fallback method
  if (!navigator.clipboard) {
    return copyTextToClipboardFallback(text);
  }
  navigator.clipboard
    .writeText(text)
    .then(() => {
      return;
    })
    .catch(() => {
      // if this failed use the last resort method
      lastResortModalShow(text);
    });
}

// function to use the old browser method of copying text
function copyTextToClipboardFallback(text: string) {
  // create a text area to allow us to put text then copy it
  const textArea = document.createElement("textarea");
  // we style the text area to be as lowkey/invisible as possible
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  textArea.style.padding = "0";
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  textArea.style.background = "transparent";
  // place text to be copied in textarea
  textArea.value = text;
  // place textarea in the dom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  // try actually copying the text using the old method
  try {
    document.execCommand("copy");
  } catch (err) {
    // if this has failed use the last resort method
    lastResortModalShow(text);
  }

  document.body.removeChild(textArea);
}

// function to handle the last resort option, essentially just show a modal of the text to be copied for the user to
// manually copy
function lastResortModalShow(text: string) {
  alert(
    <div>
      The text could unfortunately not be copied to your clipboard, please copy
      it manually: <br />
      <b>{text}</b>
    </div>,
  );
}
