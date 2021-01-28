import React from 'react';
import styled from 'styled-components';
import InputForCity from './InputForCity';

const CityFilterSearchContainer = styled.div`
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const CityFilterSearchElement = styled.label`
  width: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const CityFilterSearchInputWrapper = styled.div`
  position: relative;

  & svg {
    width: 16px;
    left: auto;
    right: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.16);
    fill: currentColor;
    z-index: 1;
    transition-duration: 0.12s;
    transition-timing-function: ease-in-out;
    touch-action: manipulation;
    cursor: pointer;
  }
`;

interface CityFilterSearchProps {
  changeCityInput: () => void;
  inputCity: () => void;
}

const CityFilterSearch: React.FC<CityFilterSearchProps> = ({ changeCityInput, inputCity }) => {

  return (
    <CityFilterSearchContainer>
      <CityFilterSearchElement
        htmlFor="city-filter__search-input"
      >
        <CityFilterSearchInputWrapper>
          <InputForCity onChange={changeCityInput} onInput={inputCity} />
          <svg
            className="isHidden"
            viewBox="0 0 16 16"
            id="icon-remove-sign"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3 8.9L9.9 11S8.1 9.1 8 9.1 6.1 11 6.1 11L5 9.9S6.9 8.2 6.9 8 5 6.1 5 6.1L6.1 5S7.9 6.9 8 6.9 9.9 5 9.9 5L11 6.1S9.1 7.9 9.1 8 11 9.9 11 9.9z" />
          </svg>
        </CityFilterSearchInputWrapper>
      </CityFilterSearchElement>
    </CityFilterSearchContainer>
  );
};

export default CityFilterSearch;
