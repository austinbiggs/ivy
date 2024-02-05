const FAVICON_PNG_SRC = '/favicon.png';
const FAVICON_SVG_SRC = '/favicon.svg';

export const Head = () => {
  return (
    <>
      <link rel="icon" type="image/x-icon" href={FAVICON_PNG_SRC} />
      <link rel="icon" type="image/x-icon" href={FAVICON_SVG_SRC} />
    </>
  );
};
