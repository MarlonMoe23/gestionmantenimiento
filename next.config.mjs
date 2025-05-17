import withPWA from 'next-pwa';

const config = {
  // Otras configuraciones de Next.js
};

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(config);

export default withPWAConfig;