// Create a component with the logo.svg image and a text Muzikie Explorer next to it.

const Logo = () => (
  <div className="flex items-center">
    <img src="./images/logo.svg" alt="Muzikie Explorer" className="h-12 w-auto" />
    <span className="ml-2 text-2xl font-bold leading-6 text-main-purple dark:text-main-beige ps-2">
      Muzikie
    </span>
    <span className="ml-2 text-lg font-normal leading-6 text-main-purple dark:text-main-beige pt-1">
      Explorer
    </span>
  </div>
);

export default Logo;
