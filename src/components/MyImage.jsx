import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = "" }) => {
  // 1. Safety Check: If imgs is a string (from MongoDB), turn it into an array format
  // If it's already an array, keep it.
  const imageArray = typeof imgs === "string" ? [{ url: imgs, filename: "product" }] : imgs;

  // 2. State for main image
  const [mainImage, setMainImage] = useState(imageArray[0]);

  // 3. Update mainImage if imageArray changes (fixes blank image on first load)
  useEffect(() => {
    setMainImage(imageArray[0]);
  }, [imgs]);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imageArray.map((curElem, index) => {
          return (
            <figure key={index}>
              <img
                src={curElem.url}
                alt={curElem.filename}
                className="box-image--style"
                onClick={() => setMainImage(curElem)}
              />
            </figure>
          );
        })}
      </div>

      {/* Main Image Display */}
      <div className="main-screen">
        <img src={mainImage?.url} alt={mainImage?.filename} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
