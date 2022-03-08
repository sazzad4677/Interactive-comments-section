import { useLayoutEffect, useRef, useState } from "react";

const useTextArea = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  // initial height for the text field
  const textAreaHeight = 8;
  // Text area reference
  const textareaRef = useRef(null);
  // Dynamically increase the height of the text
  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        textAreaHeight
      )}px`;
    }
  }, [textAreaValue, textareaRef]);

  function setValue(event) {
    setTextAreaValue(event);
  }
  return [textAreaHeight, textareaRef, textAreaValue, setValue];
};

export default useTextArea;
