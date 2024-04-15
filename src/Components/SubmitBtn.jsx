import React from "react";
import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submit";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Submitting...</span>
          </div>
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default SubmitBtn;
