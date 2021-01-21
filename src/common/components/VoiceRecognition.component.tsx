import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ReactComponent as MicroIcon } from "../../assets/icons/micro.svg";

const VoiceRecognition: React.FC<{
  handleChange: (transcript: string) => void;
}> = ({ handleChange }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ language: "en-GB" });
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  const reset = () => {
    resetTranscript();
    SpeechRecognition.startListening({ language: "en-GB" });
  };

  console.log(reset, handleChange, transcript);

  return (
    <div className="speech-container">
      <div className="speech-container__main">
        <button type="button" className="micro-btn">
          <MicroIcon />
        </button>
      </div>
      {/* <div className="speech-container__header"> */}
      {/*  {transcript && <h5>You mean {transcript} ?</h5>} */}
      {/*  <button type="button" onClick={() => handleChange(transcript)}> */}
      {/*    Yes */}
      {/*  </button> */}
      {/*  <button type="button" onClick={reset}> */}
      {/*    No */}
      {/*  </button> */}
      {/* </div> */}
      {/* <div className="speech-container__buttons"> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => SpeechRecognition.startListening()} */}
      {/* > */}
      {/*  Start */}
      {/* </button> */}
      {/* <button type="button" onClick={SpeechRecognition.stopListening}> */}
      {/*  Stop */}
      {/* </button> */}
      {/* </div> */}
    </div>
  );
};

export default VoiceRecognition;
