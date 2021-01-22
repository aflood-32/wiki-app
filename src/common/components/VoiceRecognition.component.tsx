import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ReactComponent as MicroIcon } from "../../assets/icons/micro.svg";

const VoiceRecognition: React.FC<{
  handleChange: (transcript: string) => void;
  handleBar: (param: boolean) => void;
}> = ({ handleChange, handleBar }) => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

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

  const apply = (): void => {
    handleChange(transcript);
    handleBar(false);
  };

  return (
    <div className="speech-container">
      <div className="speech-container__main">
        <button
          type="button"
          className={listening ? "micro-btn animated" : "micro-btn"}
          onClick={
            listening
              ? () => SpeechRecognition.stopListening()
              : () => SpeechRecognition.startListening()
          }
        >
          <MicroIcon />
        </button>
      </div>
      <div className="speech-container__body">
        <h5>
          You mean <span>{transcript}</span> ?
        </h5>
        <div
          className={
            transcript
              ? "speech-container__buttons active"
              : "speech-container__buttons"
          }
        >
          <button type="button" onClick={apply}>
            Yes
          </button>
          <button type="button" onClick={reset}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceRecognition;
