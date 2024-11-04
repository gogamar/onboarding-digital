import styled from "styled-components";

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const getDotStyles = ({ isActive }) => `
  height: 0.5rem;
  width: ${isActive ? "1.5rem" : "0.5rem"};
  background-color: ${isActive ? "#4B5563" : "#9CA3AF"};
  border-radius: ${isActive ? "0.375rem" : "50%"};
  cursor: pointer;
`;

const StepIndicatorDot = styled.div`
  ${getDotStyles}
`;

export default function StepIndicator({ steps, currentStep, onDotClick }) {
  return (
    <IndicatorContainer>
      {steps.map((_, index) => (
        <StepIndicatorDot key={index} isActive={index === currentStep} onClick={() => onDotClick(index)} />
      ))}
    </IndicatorContainer>
  );
}
