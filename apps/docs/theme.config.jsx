import Image from 'next/image';

const Logo = () => (
  <Image
    loading="eager"
    src="/img/logo/logo_dark.svg"
    alt="Ivy UI"
    width={105}
    height={40.8}
  />
);

const config = {
  logo: Logo,
  project: {
    link: 'https://github.com/austinbiggs/ivy',
  },
  docsRepositoryBase:
    'https://github.com/austinbiggs/ivy/tree/main/apps/hydra-site/',
  // ... other theme options
};

export default config;
